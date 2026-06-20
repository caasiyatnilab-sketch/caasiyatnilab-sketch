# Bolt's Performance Journal

## 2025-05-15 - Script Loading and Native Smooth Scrolling
**Learning:** Moving scripts to the `<head>` with `defer` allows the browser to start downloading the script earlier in parallel with HTML parsing, improving the critical rendering path. Additionally, leveraging native browser features like `scroll-behavior: smooth` in CSS is more efficient than manual JavaScript implementations, as it can be offloaded to the compositor thread and reduces the overall JavaScript execution and bundle size.
**Action:** Always prefer `defer` over placing scripts at the end of `<body>`, and prioritize native CSS/HTML solutions over JavaScript when possible for better performance and smaller footprints.
