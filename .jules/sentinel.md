## 2025-05-15 - CSP frame-ancestors via Meta Tag
**Vulnerability:** Attempted to prevent clickjacking by using `frame-ancestors 'none'` in a Content Security Policy (CSP) `<meta>` tag.
**Learning:** The `frame-ancestors` directive is ignored by browsers when defined within an HTML `<meta http-equiv="Content-Security-Policy">` tag. It must be delivered via the `Content-Security-Policy` HTTP response header to be effective.
**Prevention:** For static sites without control over HTTP headers, `frame-ancestors` cannot be used via `<meta>` tags. Other clickjacking defenses like frame-busting scripts (legacy) or ensuring the hosting provider allows setting headers should be considered.
