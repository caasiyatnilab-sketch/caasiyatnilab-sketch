## 2024-06-04 - Native Smooth Scrolling and Script Deferral
**Learning:** Native CSS 'scroll-behavior: smooth' offloads animation to the browser's compositor thread, which is more efficient than JS-based solutions. Using the 'defer' attribute on scripts allows for parallel downloading and execution after parsing, improving FCP.
**Action:** Prefer CSS for animations and 'defer' for non-critical scripts to maximize performance and minimize main-thread blockage.
