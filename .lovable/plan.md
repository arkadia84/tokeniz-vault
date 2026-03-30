

## Fix: Reduce hero section top spacing

The large gap between the header and the hero content is caused by the `.hero` CSS rule having `padding: 108px 0 96px`. The reference HTML screenshot shows significantly less top padding.

### Change

**`src/index.css`** — Reduce the `.hero` top padding from `108px` to approximately `64px`:

```css
.hero {
  padding: 64px 0 96px;
  ...
}
```

This single change brings the hero content closer to the sticky nav, matching the reference screenshot.

