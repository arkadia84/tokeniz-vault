
Fix the actual cause of the gap above the navbar.

### What I found
The gap is not coming from the navbar or hero anymore.

From the live page:
- there are **two notification regions rendered above the nav**
- `src/App.tsx` mounts both:
  - `<Toaster />`
  - `<Sonner />`
- `src/index.css` has this global rule:
```css
section:not([data-sonner-toaster]) { padding: 88px 0; }
```

That rule is too broad. It applies page spacing to any `<section>` in the app, including the notification/toast container rendered before the navbar. That creates the large empty band above the nav.

### Implementation plan
1. **Remove the unused Sonner mount from `src/App.tsx`**
   - Delete the `Sonner` import
   - Delete `<Sonner />`
   - Keep the existing `<Toaster />`

2. **Harden the page spacing rule in `src/index.css`**
   - Stop styling every `<section>` globally
   - Replace the broad selector with explicit selectors for the real landing-page sections only
   - This prevents any third-party `<section>` (toast, dialog internals, future components) from ever creating page gaps again

### Exact direction
Instead of:
```css
section:not([data-sonner-toaster]) { padding: 88px 0; }
```

Use explicit page sections, for example:
```css
.hero,
.problem-bg,
#how-it-works,
.options-bg,
#entities,
.final-cta {
  padding: 88px 0;
}
```

Then keep the custom overrides already defined for sections like `.hero`, `.trust-strip`, etc.

### Why this fixes it
- Removes the empty notification block that is sitting above the navbar
- Prevents global section padding from affecting non-page UI
- Leaves the rest of the landing page design intact
- Avoids more guesswork on hero top padding

### Files to update
- `src/App.tsx`
- `src/index.css`
