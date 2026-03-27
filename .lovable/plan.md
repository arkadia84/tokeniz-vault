## Plan: Convert new HTML landing page to React components

The uploaded HTML is a complete redesign with new sections, interactive features (audience toggle, feature tabs), pricing, testimonials, FAQ, and updated content. This needs to be converted into React/Tailwind components replacing the current landing page.  
Follow strictly the exact new design, do not change anything differently.

### New sections (in order)

1. **Header** — Updated nav links (How it works, Features, Pricing, FAQ, Get Started)
2. **HeroSection** — Audience toggle (Starting fresh / Already incorporated), dynamic content swap, 4 feature cards, orange "Book a Demo" button
3. **StatsSection** — New section: 4 stats (40+ countries, 0% FX, 100+ payouts, 24mo waived)
4. **ProblemSection** — Redesigned: Traditional Stack vs Tokeniz Stack comparison with badges
5. **AudienceSection** — New section: Two cards (Starting a new company / Already have a company)
6. **HowItWorksSection** — Redesigned: 4 numbered step cards with time badges
7. **FeaturesSection** — New section: Interactive tabbed feature list with visual panel and pills
8. **VisionSection** — Updated content, pillar items as rows instead of columns
9. **PricingSection** — New section: 3-tier pricing (Starter $497, Pro $797, Scale $1,497)
10. **TestimonialsSection** — New section: 3 testimonial cards
11. **FAQSection** — New section: 7 FAQ items
12. **CTASection** — Updated with micro-copy line
13. **Footer** — Expanded: 4-column layout with legal disclaimer

### Files to create

- `src/components/tokeniz/StatsSection.tsx`
- `src/components/tokeniz/AudienceSection.tsx`
- `src/components/tokeniz/FeaturesSection.tsx`
- `src/components/tokeniz/PricingSection.tsx`
- `src/components/tokeniz/TestimonialsSection.tsx`
- `src/components/tokeniz/FAQSection.tsx`

### Files to modify

- `src/pages/Index.tsx` — New section order and imports
- `src/components/tokeniz/Header.tsx` — New nav links + "Get Started" CTA
- `src/components/tokeniz/HeroSection.tsx` — Audience toggle, dynamic content, orange button, 4 cards
- `src/components/tokeniz/ProblemSection.tsx` — Traditional vs Tokeniz stack comparison
- `src/components/tokeniz/HowItWorksSection.tsx` — Step cards with time badges
- `src/components/tokeniz/VisionSection.tsx` — Row-based pillars
- `src/components/tokeniz/CTASection.tsx` — Add micro-copy
- `src/components/tokeniz/Footer.tsx` — 4-column layout + legal disclaimer
- `src/index.css` — Add new CSS variables (orange, card2 colors) and utility classes

### Files to remove (no longer used)

- `src/components/tokeniz/SolutionSection.tsx`
- `src/components/tokeniz/UseCasesSection.tsx`
- `src/components/tokeniz/FinancialStackSection.tsx`
- `src/components/tokeniz/EcosystemSection.tsx`

### Key interactive features

- **Audience toggle** in Hero: React `useState` to swap headline, subtitle, and CTA text
- **Feature tabs**: React `useState` to switch active tab and update the visual panel
- **FAQ**: Collapsible items using shadcn Accordion or simple toggle state

### Styling approach

- Convert all CSS custom properties to Tailwind classes
- Add orange color (`#e8834a`) to the Tailwind config
- Use existing `glass`, `fade-up`, and animation utilities where applicable
- All emoji icons kept as-is (matching the HTML design)