

## Fix: QuizModal mobile responsiveness

### Problems at 390px viewport
1. **Modal too tall** — `.modal` has `padding: 36px` and no height constraint, so content overflows off-screen on the result page (tier cards + tokenization + email row + hint text)
2. **Result screen not scrollable** — no `overflow-y: auto` or `max-height`, so bottom elements (email input, send button) are unreachable
3. **Tier cards cramped** — `.result-path` uses horizontal flex with price and arrow, which gets squeezed on small screens
4. **Tokenization block** — flex row layout with button doesn't wrap well at 390px
5. **Email row** — already stacks at 600px breakpoint, but the modal itself still clips

### Changes — single file: `src/index.css`

Add a mobile media query block for the modal (at `max-width: 600px`):

```css
@media (max-width: 600px) {
  /* Modal: full-screen on mobile, scrollable */
  .modal-overlay { padding: 8px; }
  .modal {
    padding: 20px 16px;
    border-radius: 14px;
    max-height: 90vh;
    overflow-y: auto;
  }

  /* Smaller text and spacing in quiz screens */
  .quiz-q { font-size: 1rem; }
  .quiz-sub { font-size: 0.8rem; margin-bottom: 16px; }
  .quiz-opts { gap: 8px; margin-bottom: 20px; }
  .qopt { padding: 11px 12px; font-size: 0.82rem; gap: 10px; }
  .quiz-progress-bar { margin-bottom: 20px; }

  /* Tier cards: stack price below title */
  .result-path {
    flex-wrap: wrap;
    padding: 12px 14px;
    gap: 6px;
  }
  .rp-left { width: 100%; }
  .rp-left h4 { font-size: 0.82rem; }
  .rp-left p { font-size: 0.72rem; }
  .rp-price { font-size: 0.9rem; }
  .rp-arrow { display: none; }
}
```

These rules merge into the existing `@media (max-width: 600px)` block. The key fix is `max-height: 90vh; overflow-y: auto` on `.modal` so the result screen scrolls and all elements remain reachable.

### Files to update
- `src/index.css` — add mobile modal rules inside the existing 600px breakpoint

