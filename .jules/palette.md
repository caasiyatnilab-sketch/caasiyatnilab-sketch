## 2025-05-14 - Accessible Smooth Scrolling with Focus Management
**Learning:** When implementing smooth scroll using `scrollIntoView`, it's critical to also programmatically move focus to the target element (which needs `tabindex="-1"`). Without this, the visual scroll happens but the screen reader and keyboard focus remain on the clicked link, breaking the user experience and violating accessibility standards.
**Action:** Always pair `scrollIntoView` with a `.focus()` call on the target element, and ensure target elements are focusable via `tabindex="-1"`.
