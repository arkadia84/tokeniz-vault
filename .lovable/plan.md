

# Tokeniz — Premium RWA Infrastructure Landing Page

## Overview
A high-end, dark-themed fintech landing page for Tokeniz — an on-chain company formation platform. The design follows a Deep Navy color system with Electric Blue accents, glassmorphism cards, and geometric precision inspired by Stripe Press and Swiss Re.

## Design System
- **Colors**: Deep navy background (`hsl(222, 47%, 4%)`), off-white text, Electric Blue (`hsl(217, 91%, 60%)`) accents
- **Typography**: Geist Sans for headlines (tight tracking), Inter for body, Geist Mono for data points
- **Cards**: Glassmorphism with `backdrop-blur`, `border-white/10`, deep shadow stacks
- **Motion**: 300ms cubic-bezier(0.2, 0, 0, 1), scroll-triggered fade-up entrances
- **Radius**: 12px outer, 8px inner

## Page Sections

### 1. Sticky Header
- Tokeniz logo (left), nav links (About, Technology, Use Cases, Contact), "Book a Demo" ghost button + "Register Early Access" solid blue button
- Glassmorphism background on scroll

### 2. Hero Section
- **Headline**: "Turn Companies Into Digital Infrastructure" (text-5xl/7xl, balanced, tight tracking)
- **Subhead**: Programmable ownership for asset managers
- **CTAs**: "Register Early Access" (solid blue) + "Book a Demo" (ghost)
- **Visual**: 3D CSS perspective grid with floating Asset Cards (Real Estate, Fund, IP) resolving into a single "Tokenized Entity" node, with subtle radial blue glow and slow pulse animation

### 3. Problem Section — "Paper vs. Programmable"
- **Title**: "The World's Assets Still Run on Paper Infrastructure"
- **Comparison card**: Left side (Analog) — desaturated, opacity-50, paper icons for Legal/Bank/Registry/Broker/Accountant. Right side (Tokeniz) — Electric Blue, Geist Mono data points, digital icons
- Hover interaction shifts visual weight from analog to digital side

### 4. Solution Section — "A New Infrastructure for Ownership"
- Key capabilities as left-aligned text with icon grid
- Digital-native companies, tokenized ownership, fractional participation, on-chain cap tables, global transfers
- Animated diagram: Company → Tokenized Entity → Global Investors with dashed flow lines using stroke-dashoffset animation

### 5. How It Works — 4-Step Flow
- Horizontal step flow with numbered cards (1-4)
- Create → Attach Assets → Tokenize → Distribute
- Each step in a glassmorphism card with icon, title, description
- Connected by animated dashed lines

### 6. Use Cases — Card Grid
- 4 cards: Real Estate Developers, Operators & Entrepreneurs, Investment Syndicates, Digital Asset Businesses
- Glassmorphism cards with `group-hover:border-blue-500/30` transition
- Each with icon, title, short description

### 7. Financial Stack Integration
- **Title**: "Built for the New Financial Rails"
- Horizontal flow diagram: Real Assets → Tokeniz Engine → Global Liquidity
- Animated dashed connection lines
- Integration points: stablecoin rails, crypto wallets, neobanks, custody providers

### 8. Vision Section
- Large typographic statement: "The Internet Changed Information. Blockchain Will Change Ownership."
- Three short declarations: Ownership → programmable, Liquidity → global, Markets → accessible
- Subtle background radial glow

### 9. Ecosystem / Social Proof
- "Designed for a Global Ecosystem"
- Placeholder logo grid (blockchain networks, financial infra, legal, real estate) in muted opacity
- Glassmorphism container

### 10. Final CTA Section
- "Build the Next Generation of Companies"
- Email capture input + "Register Early Access" button
- "Book a Demo" secondary button
- Radial blue glow background effect

### 11. Footer
- Links: About, Technology, Use Cases, Contact, Privacy
- Tagline: "Tokeniz is building infrastructure for tokenized companies and real-world assets."
- Minimal, left-aligned

## Technical Details
- Scroll-triggered animations using Intersection Observer (CSS-based, no Framer Motion dependency)
- Fully responsive: mobile-first with breakpoints at md/lg
- SEO meta tags in index.html
- Email capture form with toast confirmation (local state, no backend)
- All fonts loaded via Google Fonts (Inter, Geist Sans, Geist Mono)

