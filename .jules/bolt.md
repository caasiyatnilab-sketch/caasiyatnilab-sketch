## 2025-04-08 - Offloading Smooth Scrolling to CSS
**Learning:** Native CSS 'scroll-behavior: smooth' is handled by the browser's compositor thread, which is more efficient than manual JavaScript implementations that run on the main thread. This reduces main-thread contention and provides a smoother user experience, especially on lower-powered devices.
**Action:** Always prefer native browser features for animations and interactions (like scrolling) over custom JavaScript logic when compatibility allows.

## 2025-04-08 - Optimizing Script Loading with 'defer'
**Learning:** Adding the 'defer' attribute to script tags ensures that scripts are downloaded in parallel with HTML parsing but only executed after the document is fully parsed. This improves the 'Time to Interactive' by preventing the script from blocking the main thread during initial page load.
**Action:** Use 'defer' for non-critical scripts to optimize page load performance without changing execution order.
