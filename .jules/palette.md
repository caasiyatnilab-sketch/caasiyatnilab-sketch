## 2025-05-14 - Focus management in Single Page Navigations
**Learning:** In single-page websites using smooth scrolling, focus management is crucial for accessibility. Without it, screen readers and keyboard focus remain on the clicked link, even if the viewport has moved to a new section.
**Action:** Always add `tabindex="-1"` to target sections and programmatically move focus to them after navigation. Ensure interactive elements have clear `:focus-visible` styles and provide ARIA labels for major landmarks like navigation.
