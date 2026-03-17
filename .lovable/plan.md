

## Fix: "Book a Demo" button hover contrast

The issue is that the `outline` variant's default hover style (`hover:bg-accent hover:text-accent-foreground`) overrides the custom classes. Since `accent` and `accent-foreground` are blue/dark, the text becomes invisible on hover.

### Change

**`src/components/tokeniz/CTASection.tsx` line 26**: Update the "Book a Demo" button to explicitly set `hover:text-foreground` so text stays light on hover:

```
hover:bg-secondary hover:text-foreground
```

This matches the pattern already used in the Header's ghost "Book a Demo" button.

