## 2024-06-04 - Native Smooth Scrolling & Accessibility
**Learning:** Using native CSS `scroll-behavior: smooth` is superior to JavaScript implementations because it naturally handles URL hash updates and integrates seamlessly with `prefers-reduced-motion` media queries, ensuring a pleasant experience that respects user accessibility settings without extra code.
**Action:** Favor CSS `scroll-behavior` for internal navigation and always pair it with a `prefers-reduced-motion` check.
