## 2025-05-14 - Focus Management and Keyboard Accessibility
**Learning:** When implementing smooth scrolling navigation on static sites, purely visual scrolling leaves keyboard and screen reader focus at the trigger link, creating a disconnected experience. Explicitly shifting focus to the target section (which needs `tabindex="-1"`) after the scroll animation ensures the focus order remains logical and accessible.
**Action:** Always pair smooth scroll animations with programmatic focus management using `element.focus()` and appropriate `tabindex` on target containers.
