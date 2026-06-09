# Bolt's Performance Journal

## 2025-05-14 - Native Smooth Scrolling and Deferred Scripts
**Learning:** Using native CSS `scroll-behavior: smooth` is more efficient than manual JavaScript implementations as it leverages the browser's optimized scrolling engine and reduces main-thread execution. Moving scripts to the `<head>` with `defer` allows the browser to start downloading scripts earlier while still waiting for the DOM to be fully parsed before execution.
**Action:** Replace JS-based smooth scroll with CSS and use `defer` for script tags in future static site projects.
