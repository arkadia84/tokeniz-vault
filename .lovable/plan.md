

# Fix "Book a Demo" Button Hover Contrast

## Problem
The ghost-variant "Book a Demo" buttons use `hover:text-accent-foreground` which resolves to dark navy (`hsl(222, 47%, 4%)`), making text invisible against the dark background on hover.

## Fix
Update the "Book a Demo" buttons in both **Header.tsx** (line ~48) and **CTASection.tsx** (line 50) to override hover styles so text stays light:
- Change hover classes to `hover:text-foreground hover:bg-white/10` — keeps text white/light and uses a subtle translucent background instead of the blue accent.

Two locations to update:
1. `src/components/tokeniz/Header.tsx` — the desktop "Book a Demo" button
2. `src/components/tokeniz/CTASection.tsx` — the CTA section "Book a Demo" button

