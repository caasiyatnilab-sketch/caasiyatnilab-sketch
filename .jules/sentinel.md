# Sentinel Security Journal

This journal logs critical security discoveries and learnings.

## 2026-06-30 - Clickjacking Protection via Meta Tags
**Vulnerability:** Potential clickjacking vulnerability.
**Learning:** `X-Frame-Options` meta tag (using `http-equiv`) is not supported by modern browsers and is considered security theater. The `frame-ancestors` directive within `Content-Security-Policy` is the modern and effective way to achieve this protection via meta tags.
**Prevention:** Use `CSP: frame-ancestors 'none'` for robust clickjacking defense when HTTP headers cannot be directly controlled.
