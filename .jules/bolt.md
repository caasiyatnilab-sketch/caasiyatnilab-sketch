## 2025-05-15 - Native Smooth Scrolling and Script Deferral
**Learning:** Native CSS 'scroll-behavior: smooth' is more performant than JS-based implementations as it runs on the compositor thread. Using 'defer' on script tags in the head allows parallel downloading without blocking HTML parsing.
**Action:** Prefer native browser features over JavaScript for standard behaviors and use 'defer' for non-critical scripts to optimize the critical rendering path.
