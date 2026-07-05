## 2025-05-15 - Sticky Header and Accessible Navigation
**Learning:** When implementing a sticky header, standard anchor links will cause the target section to scroll to the top of the viewport, often resulting in the header obscuring the section's title. Additionally, CSS `scroll-behavior: smooth` provides a nice visual effect but does not manage keyboard focus for screen readers.

**Action:**
1. Use `scroll-padding-top` on the `html` element to create a scroll offset that matches the sticky header's height.
2. Always pair programmatic or CSS smooth scrolling with manual focus management in JavaScript (using `tabindex="-1"` and `.focus()`) to ensure the focus follows the visual jump for accessibility.
