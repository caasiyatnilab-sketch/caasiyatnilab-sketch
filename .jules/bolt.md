# Bolt's Performance Journal

## 2026-07-06 - Native CSS Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` is significantly more efficient than JS-based `scrollIntoView` or custom scroll listeners because it runs on the browser's compositor thread, avoiding main thread congestion.
**Action:** Always prefer native CSS for smooth scrolling animations unless complex custom timing functions are required.
