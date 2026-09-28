# Alpha Stock Tool — vanstonefinance.com

Static landing page designed to convert visitors into:
1. Demo bookings
2. WhatsApp conversations

## Files to upload

Upload ALL of these files to the ROOT of your GitHub Pages repository:

- `index.html`
- `styles.css`
- `CNAME`
- `.nojekyll`
- `404.html`

No server, database, API key, password, or secret is required.

## IMPORTANT: Fixing the "Not secure" warning

The warning in Chrome is normally caused by the custom domain/DNS/HTTPS configuration, not by the HTML files.

GitHub Pages issues the HTTPS certificate after the custom domain is correctly connected.

### 1. GitHub Pages

In the repository:

**Settings → Pages**

Set:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- Custom domain: **vanstonefinance.com**

Save it.

After the domain is correctly configured and GitHub has issued the certificate, enable:

**Enforce HTTPS**

GitHub notes that certificate provisioning can take some time after DNS is configured.

### 2. DNS for vanstonefinance.com

At the DNS provider where `vanstonefinance.com` is managed, remove conflicting A/AAAA records for `@`, then use GitHub Pages' recommended records:

A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153

For `www`:

CNAME  www  YOUR-GITHUB-USERNAME.github.io

Replace `YOUR-GITHUB-USERNAME` with the GitHub account that owns the Pages repository.

Do NOT point `www` to `vanstonefinance.com` if you want GitHub Pages HTTPS to provision cleanly.

### 3. Wait for DNS + certificate

DNS changes can take time to propagate. GitHub then provisions the TLS certificate automatically.

If **Enforce HTTPS** is not available immediately, wait and check again.

### 4. Domain verification

For better protection against GitHub Pages domain takeover, verify `vanstonefinance.com` in GitHub's Pages/domain settings and keep the GitHub-provided TXT verification record in DNS.

## Security

The site contains:
- No API keys
- No passwords
- No database credentials
- No form that collects sensitive information
- No client-side JavaScript
- Restrictive Content Security Policy
- `youtube-nocookie.com` for the embedded demo
- `noopener noreferrer` on external booking/WhatsApp links
- `object-src 'none'`
- `connect-src 'none'`
- `upgrade-insecure-requests`

GitHub Pages cannot set arbitrary HTTP response headers from repository files. For stronger server-level headers such as HSTS and response-header CSP, place the domain behind Cloudflare.

## Important

Do not enter passwords, credit-card numbers, or other sensitive information into a static GitHub Pages site. This landing page is intended for demo booking and WhatsApp contact.
