## 2025-05-14 - Focus Management for Internal Links
**Learning:** In a single-page layout with smooth scrolling, native anchor links update the URL but don't always move focus to the target element. Adding `tabindex="-1"` to target sections and using `<main>` as a focusable landmark ensures that keyboard and screen reader users are correctly positioned after navigation.
**Action:** Always ensure scroll targets have `tabindex="-1"` and use semantic landmarks like `<main>` for skip-to-content links.
