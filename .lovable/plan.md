

## Plan: Create `leads` table and `send-action-plan-email` Edge Function

### 1. Database migration — create `leads` table

```sql
CREATE TABLE public.leads (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name   text NOT NULL,
  email        text NOT NULL,
  contact      text,
  entity       text,
  tier         text,
  answers      jsonb,
  created_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
```

No RLS select/insert policies needed since only the Edge Function (using service role) writes to this table.

### 2. Create `supabase/functions/send-action-plan-email/index.ts`

The function will:

- Reuse the same CORS helper and rate-limiting pattern from the existing `send-confirmation` function
- Accept the POST body exactly as specified (all partner/bank fields passed explicitly by the client — no server-side partner resolution)
- Build the email HTML as a template string with `${placeholder}` interpolation
- **Stablecoin block**: conditionally include only when `stablecoin_partner_name` is non-empty
- **Tier block**: call a `buildTierBlock(tier)` helper (reused logic from existing function) that returns the correct HTML for "free", "guided", or "fasttrack"
- Send via Resend directly (`fetch("https://api.resend.com/emails", ...)`) using `RESEND_API_KEY`
  - From: `Yacine at Tokeniz <hello@tokeniz.ai>`
  - Subject: `Your Tokeniz Match — ${entity_name}`
  - CC: `admin@propex.app` (matching existing behavior)
- Save lead to `leads` table via Supabase service role client
- Return `{ success: true }` or `{ error: "..." }`

The email HTML template will be essentially the same structure as the existing `buildEmailHtml` in `send-confirmation`, but with all partner fields coming from the request body instead of being resolved server-side.

### 3. Deploy

Deploy the new edge function via `deploy_edge_functions`.

### No frontend changes

The frontend `QuizModal.tsx` is not modified. The caller will invoke this new function separately when ready.

### Files to create/update
- **Migration**: `leads` table
- **New file**: `supabase/functions/send-action-plan-email/index.ts`

