# Bolt's Performance Journal - Critical Learnings Only

## 2026-06-29 - Prevent redundant 404 for favicon
**Learning:** Browsers automatically request `/favicon.ico` if no favicon is specified, which leads to a redundant 404 network request in projects without a favicon asset.
**Action:** Always include `<link rel="icon" href="data:,">` to prevent this unnecessary request and improve initial load efficiency.
