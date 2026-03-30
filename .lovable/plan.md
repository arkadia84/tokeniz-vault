

## Fix: QuizModal false-positive error from supabase.functions.invoke

### Problem

The edge function executes successfully (returns HTTP 200 with `{ success: true, emailSent: true }`), but the frontend shows "Something went wrong." The `supabase.functions.invoke` returns `{ data, error }` where `error` can be a `FunctionsHttpError` wrapping a non-error response. The current code checks `if (error)` which catches these false positives.

### Root cause

`supabase.functions.invoke` in v2 can return a non-null `error` of type `FunctionsHttpError` even for 200 responses in certain parsing edge cases. The fix is to use `{ data, error }` more defensively — check the `data` payload for `success: true` instead of relying solely on `error` being null.

### Change

**`src/components/tokeniz/QuizModal.tsx`** — Update `handleSubmitEmail` to check the response data instead of relying on the error object:

```typescript
const { data, error } = await supabase.functions.invoke("send-confirmation", { body: { ... } });

if (error) {
  console.error("Edge function error:", error);
  // Check if data still indicates success (false-positive error)
  if (!data?.success) {
    setHint("Something went wrong — please try again.");
    setSending(false);
    return;
  }
}
```

This ensures that if the function actually succeeded (data.success === true), the UI shows the success message even if the Supabase client wraps the response in an error object.

### Files modified
- `src/components/tokeniz/QuizModal.tsx` — More resilient error handling for edge function response

