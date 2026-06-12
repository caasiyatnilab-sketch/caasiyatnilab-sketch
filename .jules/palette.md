## 2025-05-15 - Accessible Smooth Scrolling and Focus Management
**Learning:** In static sites with smooth scrolling navigation, visual transitions do not automatically update the focus state. For keyboard and screen reader users, it's critical to programmatically shift focus to the target section after the animation completes (e.g., using a `setTimeout` of ~500ms).
**Action:** Always pair `scrollIntoView` with a programmatic `.focus()` call on the target element (which needs `tabindex="-1"` if it's not naturally focusable).
