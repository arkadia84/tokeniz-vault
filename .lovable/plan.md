

## Plan: Quiz recap email via Edge Function

### Summary

Update the existing `send-confirmation` Edge Function to accept quiz answers, tier selection, and entity match data from the QuizModal. Build a dynamic HTML email using the uploaded template, showing the quiz recap, entity recommendation, matched partners, and the correct tier-specific CTA block. Update the QuizModal to call the edge function on submit.

### Partner data mapping

Based on the `resolveEntity` logic, define partner recommendations per entity:

- **Delaware C-Corp**: Formation = Fileforms (referral link), Banking = Mercury + Relay, Stablecoin = N/A
- **Wyoming LLC**: Formation = Fileforms (referral link), Banking = Mercury + Relay, Stablecoin = N/A  
- **Singapore Pte Ltd**: Formation = Elephants (referral link), Banking = Aspire + Wise, Stablecoin = BVNK

Referral links:
- Fileforms: `https://register.fileforms.com/partner-file-now-cta-v2/?REFERRALCODE=recM4mmc9COERzwg5`
- Elephants: `https://app.elephants.inc/onboard/signup?referral=PROPEX`

### Email subject line

Dynamic based on tier: 
- Free: `Your Tokeniz Match — Free Action Plan`
- Guided: `Your Tokeniz Match — Guided Advisory ($497)`
- Fast Track: `Your Tokeniz Match — Fast Track Advisory ($997)`

### Changes

#### 1. `supabase/functions/send-confirmation/index.ts`
- Accept new fields in request body: `answers` (object with q1-q5 text), `tier` (free/guided/fasttrack), `entity` (name + reason), `tokenInterest` (boolean)
- Replace the static email HTML with the uploaded template, dynamically filling:
  - `{{first_name}}` → extracted from email (part before @) or "there"
  - `{{answer_q1}}` through `{{answer_q5}}` → from answers
  - `{{entity_name}}`, `{{entity_reason}}` → from resolved entity
  - Partner cards populated based on entity type
  - Only the matching tier block (A/B/C) is included
- Update the subject line to include the tier label
- Keep existing rate limiting, DB upsert, and Resend integration

#### 2. `src/components/tokeniz/QuizModal.tsx`
- Import `supabase` client
- In `handleSubmitEmail`, call `supabase.functions.invoke('send-confirmation', ...)` passing:
  - `email`, `tier`, `answers` (q1-q5 text values), `entity` result, `tokenInterest`
- Add loading state and error handling
- Remove the `console.log` placeholder

#### 3. Database
- No schema changes needed — the existing `early_access_signups` and `rate_limits` tables are sufficient.

### Files modified
- `supabase/functions/send-confirmation/index.ts` — Dynamic quiz recap email with partner data and tier-specific blocks
- `src/components/tokeniz/QuizModal.tsx` — Wire up edge function call on email submit

