# Alpha Stock Tool — GitHub Pages

Landing page focused on one conversion: **book a demo or start a WhatsApp conversation**.

## Upload to GitHub Pages
1. Upload `index.html`, `styles.css`, and this `README.md` to the repository root.
2. In GitHub: **Settings → Pages → Deploy from a branch → main → / (root)**.
3. The page is static and requires no server or API keys.

## Links configured
- Demo video: https://youtu.be/pu417eQk4MQ (embedded with `youtube-nocookie.com`)
- Booking: https://calendar.app.google/zZt4YiRpANuF8h7NA
- WhatsApp: +1 (905) 359-9700

## Security
- No API keys, passwords, or secrets are stored in the site.
- No client-side JavaScript is used.
- A restrictive Content Security Policy is included as a meta tag.
- `youtube-nocookie.com` is the only third-party frame allowed.
- External booking/WhatsApp links use `noopener noreferrer`.
- `object-src 'none'`, `connect-src 'none'`, and `frame-ancestors 'self'` are included in the CSP.

GitHub Pages does not let a static repository set arbitrary HTTP response headers. For stronger production security headers such as HSTS and a response-header CSP, put the site behind Cloudflare or another reverse proxy.
