# Sentinel's Journal

## Security Philosophy
- Defense in Depth
- Fail Securely
- Trust nothing, verify everything

## 2026-05-03 - Static Site Defense-in-Depth
**Vulnerability:** Lack of security headers (CSP, Referrer-Policy) and broken focus management on in-page navigation.
**Learning:** Static sites served via file:// or simple hosts often miss HTTP headers. Meta tags can provide a baseline CSP and privacy protection.
**Prevention:** Always include <meta http-equiv="Content-Security-Policy"> and <meta name="referrer">. Ensure hash-based navigation manages focus by using tabindex="-1" on targets and calling .focus() after scroll.
