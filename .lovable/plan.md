

## Plan: Update quiz Q3 options and entity routing logic

### Changes — single file: `src/components/tokeniz/QuizModal.tsx`

**1. Question 3 options (line 77)**

Replace the single `"🌏 Asia Pacific"` option with two new options:
- `"🌏 Southeast Asia / ASEAN (Indonesia, Vietnam, Thailand…)"`
- `"🇨🇳 China / Greater Bay Area"`

**2. `resolveEntity()` function (lines 14–41)**

- Add `q4` variable to read `answers.q4?.text`
- Replace `isAPAC` with three new checks: `isASEAN`, `isChina`, `isCrypto`
- Replace the single `if (isAPAC)` block with two new blocks:
  - `if (isChina || (isASEAN && isCrypto))` → returns Hong Kong Limited with partners `['Osome', 'Airwallex', 'Aspire', 'Elephants Inc.']`
  - `if (isASEAN)` → returns Singapore Pte Ltd with partners `['Osome', 'Aspire', 'Revolut Business SG', 'Elephants Inc.']`
- Both new returns include updated `subline`, `bankingNote`, and `tokenizable: false`

### No other changes
No design, layout, style, or copy changes. Only logic in `QuizModal.tsx`.

