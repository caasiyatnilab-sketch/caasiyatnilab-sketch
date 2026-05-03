# Bolt's Journal - Performance Optimizations

## 2024-05-03 - Accessible Smooth Scrolling Pattern
**Learning:** Native CSS 'scroll-behavior: smooth' can be triggered by 'element.focus()' if the element has 'tabindex="-1"'. This offloads animation to the compositor thread while maintaining accessibility.
**Action:** Use 'element.focus()' combined with CSS 'scroll-behavior: smooth' for in-page navigation. Use 'history.pushState' to update the URL hash without triggering a redundant browser scroll jump.
