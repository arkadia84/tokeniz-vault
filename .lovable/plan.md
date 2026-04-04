

## Plan: Fix CORS origin check in `send-action-plan-email` Edge Function

### Problem
The edge function works correctly — emails are sent and leads are saved (confirmed via logs). However, the browser blocks the response due to a CORS mismatch: the preview runs on `*.lovableproject.com` but the function only allows `*.lovable.app` origins. This causes the frontend to show an error instead of the success state.

### Fix — `supabase/functions/send-action-plan-email/index.ts`

**Line 11**: Update the `isAllowed` check to also accept `.lovableproject.com`:

```typescript
const isAllowed = ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".lovable.app") || origin.endsWith(".lovableproject.com");
```

That is the only change. No design or frontend changes needed.

### Verification
After deploying, re-test the quiz submission to confirm the button transitions to "Sending…" → "✓ Sent!" and the success hint appears.

