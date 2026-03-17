

## Plan: Replace CTA buttons and link to demo app

### What changes

1. **Replace all "Register Early Access" buttons** with "Try Demo App" linking to `https://app.tokeniz.ai`
   - Header (desktop + mobile)
   - HeroSection
   - CTASection

2. **Update CTASection**: Remove the email signup form and replace with a simple "Try Demo App" button, since early access registration is no longer the primary CTA.

3. **Subdomain setup (app.tokeniz.ai)**: This is a DNS configuration, not a code change. You need to:
   - Go to your **other project** (the MVP app) in Lovable
   - Open Settings → Domains → Connect Domain
   - Enter `app.tokeniz.ai`
   - Add an **A record** for `app` pointing to `185.158.133.1` at your domain registrar (where tokeniz.ai DNS is managed)
   - Add the TXT verification record Lovable provides

### Files to modify

- `src/components/tokeniz/Header.tsx` — Change button text and href
- `src/components/tokeniz/HeroSection.tsx` — Change button text and href
- `src/components/tokeniz/CTASection.tsx` — Replace email form with button linking to app.tokeniz.ai

### Technical details

All "Register Early Access" buttons become `<a href="https://app.tokeniz.ai">Try Demo App</a>`. The CTASection email form + edge function call will be replaced with a simpler CTA layout with the demo button and the existing "Book a Demo" link.

