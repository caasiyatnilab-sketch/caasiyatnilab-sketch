## 2025-05-14 - Event Delegation & Defer Optimization
**Learning:** Using `defer` on scripts allows parallel fetching and non-blocking HTML parsing, and it guarantees execution after DOM parsing, making `DOMContentLoaded` redundant. Event delegation on container elements reduces memory footprint and initialization time compared to multiple individual listeners.
**Action:** Always prefer `defer` for external scripts in `<head>` and use event delegation for handling interactions on multiple similar child elements.
