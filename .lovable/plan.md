
Fix the header-gap issue by tightening the hero’s top spacing further. The previous change to `.hero` is already present in `src/index.css`, so that edit did not fully close the visible gap.

### What I found
- `src/index.css` already has:
  ```css
  .hero {
    padding: 64px 0 96px;
  }
  ```
- The homepage still renders the first hero content too far below the sticky nav.
- The gap is created by the hero section itself, not by the header component.
- There is also a separate global rule:
  ```css
  section { padding: 88px 0; }
  ```
  but the hero has its own `.hero` rule, so the safest fix is to adjust only `.hero`.

### Proposed fix
Update only `src/index.css`:
- Reduce `.hero` top padding again, from `64px` to a smaller value matching the reference more closely, likely around `32px` to `40px`.
- Keep the bottom padding unchanged so the rest of the page stays intact.

Example target:
```css
.hero {
  padding: 36px 0 96px;
}
```

### Why this is the right fix
- It changes only the spacing above the hero content.
- It does not affect the sticky header height.
- It does not alter other sections or layout wrappers.
- It directly addresses the exact visible gap the user is reporting.

### Technical note
There are also unrelated React ref warnings involving `Footer` and `QuizModal`, but they are not the cause of the top spacing issue and should not be touched in this fix.

### Files to update
- `src/index.css`
