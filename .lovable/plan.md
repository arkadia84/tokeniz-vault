

## Fix: Social Media Thumbnail Not Appearing

### Root Cause
The `og:image` and `twitter:image` URLs point to signed Google Cloud Storage links with expiration timestamps. These are temporary URLs that stop working after the expiry, so social media crawlers (Facebook, Twitter/X, LinkedIn) get errors when trying to fetch the image.

### Solution
Host the OG image as a static asset in the project so it's always available at a permanent, clean URL.

### Steps
1. **Create an OG image** — Generate a 1200x630px branded image (the standard OG size) as a static PNG file at `public/og-image.png`. This will use the Tokeniz brand colors and display the company name and tagline.

2. **Update `index.html`** — Replace the expired GCS URLs with a permanent, relative path:
   - `og:image` → `https://tokeniz-vault.lovable.app/og-image.png`  
   - `twitter:image` → `https://tokeniz-vault.lovable.app/og-image.png`
   - Add `og:image:width` (1200) and `og:image:height` (630) meta tags — these help crawlers render the preview correctly.
   - Use the published URL as the base since social crawlers need an absolute URL.

3. **Add `og:url`** meta tag pointing to the canonical URL for proper link previews.

### Technical Notes
- OG images must be absolute URLs (not relative paths)
- Recommended size: 1200x630px for optimal display across platforms
- After deploying, use [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) to clear cached previews
- Since we can't generate a raster image directly, I'll create an SVG-based OG image and reference it, or use an edge function to generate one dynamically

