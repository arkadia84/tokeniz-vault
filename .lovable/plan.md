

## Plan: Update Tier Structure, Pricing, and Partner Data

### Summary
Update Guided tier to $9 founding member price, replace Founder's Pack with a Formation referral card, update quiz result screen accordingly, update Singapore formation partner from Osome to Sleek, wire Stripe for $9 payment, and clean up all legacy references.

---

### 1. Guided Tier — Price to $9 Founding Member

**ResultOptionsSection.tsx** (Option 02 card):
- Price: replace `$497` with `$9` + strikethrough `$97`
- Add green label beneath: "🎉 Founding Member Price — limited spots" (`color: #86EFAC`)
- Subtitle stays: "Advisory fee only · formation costs paid separately to partners"
- No other changes to features/copy

**QuizModal.tsx** (result screen row):
- `tierLabels.guided`: `"Guided — Founding Member ($9)"`
- Row price: show `$9` with strikethrough `$97`
- Row desc unchanged

### 2. Replace Founder's Pack with Formation (referral CTA)

**ResultOptionsSection.tsx** — replace entire Option 03 card:
- Label: "Option 03 — Formation"
- Price: "From $399" + "+ state fee" muted
- Green label: "No Tokeniz fee — paid directly to our formation partner"
- Timeline: "🏢 Full entity formation via our vetted partner"
- Description and features as specified
- Disclaimer as specified
- CTA: "Take the Quiz to Get Started →" → opens quiz

**QuizModal.tsx** — result screen:
- Remove `founders` tier row from the selectable tiers array
- Remove `founders` from `tierLabels`
- Add a new Formation referral row below the tier list, visually separated with green border-top
- Row is entity-specific: uses a `formationLinks` map keyed by entity name with heading, description, price, and URL
- Clicking opens URL in new tab (not a tier selector, no email form trigger)
- Small green "No Tokeniz fee" label below price

### 3. Stripe — $9 Guided Payment Link

- Enable Stripe integration
- Create a one-time product "Tokeniz Guided — Founding Member" at $9.00 USD
- Wire the Guided tier "→" button in the quiz result screen to the Stripe payment link
- Formation row links go to partner URLs directly (no Stripe)

### 4. Singapore Formation Partner — Osome → Sleek

**QuizModal.tsx** `partnerMap["Singapore Pte Ltd"]`:
- `formation_partner_name`: "Sleek"
- `formation_partner_desc`: update to mention Sleek
- `formation_partner_url`: `https://sleek.com/sg/?ref=zmqynme`
- `formation_cta_text`: "Register via Sleek →"

**QuizModal.tsx** `resolveEntity` — Singapore partners array: replace "Osome" with "Sleek"

**supabase/functions/send-action-plan-email/index.ts**:
- Update `buildTierBlock` for `guided`: change `$497` to `$9 (Founding Member)`
- Remove `founders` tier block entirely
- No other email template changes needed (partner data comes from frontend payload)

### 5. Clean Up Legacy References

Files affected:
- **QuizModal.tsx**: remove `founders` key from `tierLabels`, remove founders tier row
- **ResultOptionsSection.tsx**: replace Founder's Pack card with Formation card
- **send-action-plan-email/index.ts**: remove `founders` tier block in `buildTierBlock`, update guided price label
- **send-confirmation/index.ts**: remove `fasttrack` references if present (search showed `fasttrack` in tier labels there)

### 6. Fileforms URL Verification

Confirm all Fileforms URLs use: `https://register.fileforms.com/partner-file-now-cta-v2/?REFERRALCODE=recM4mmc9COERzwg5` (already correct in current code).

---

### Files to modify
- `src/components/tokeniz/ResultOptionsSection.tsx`
- `src/components/tokeniz/QuizModal.tsx`
- `supabase/functions/send-action-plan-email/index.ts`
- `supabase/functions/send-confirmation/index.ts` (clean up fasttrack)

### Stripe setup
- Enable Stripe → create product → get payment link → wire to Guided button

