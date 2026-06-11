## 2025-05-14 - Meta Tag CSP Limitations
**Vulnerability:** Incomplete CSP enforcement.
**Learning:** The `frame-ancestors` directive and certain other CSP features are not supported when defined via a `<meta>` tag; they must be sent via HTTP headers.
**Prevention:** Always prefer server-level HTTP headers for CSP when possible, and use `<meta>` tags only as a fallback or for static sites, while being aware of the limited directive support.
