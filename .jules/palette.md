## 2024-06-12 - [Focus Management in SPA-like Navigation]
**Learning:** In single-page websites with smooth scrolling, simply scrolling to a section is insufficient for accessibility. Keyboard and screen reader focus must be explicitly moved to the target section to ensure a logical flow.
**Action:** Always move focus to the target element after smooth scroll, ensuring the element has `tabindex="-1"` if it's not naturally focusable.

## 2024-06-12 - [IntersectionObserver for Navigation States]
**Learning:** Using `IntersectionObserver` with a `rootMargin` like `-10% 0px -70% 0px` provides a much more reliable "scroll-spy" experience than listening to scroll events, as it better handles varying section heights.
**Action:** Use `IntersectionObserver` for active navigation highlighting with appropriate margins to match the visual "center" of the viewport.
