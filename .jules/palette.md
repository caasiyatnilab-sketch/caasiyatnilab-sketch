## 2024-12-04 - Smooth Scroll and Programmatic Focus
**Learning:** Native CSS 'scroll-behavior: smooth' or JS 'scrollIntoView' does not automatically move the keyboard or screen reader focus to the target element. This leaves keyboard users at the top of the page after clicking a navigation link.
**Action:** Always pair smooth scrolling with programmatic focus (e.g., targetElement.focus()) using a delay (e.g., 800ms) to ensure the transition is underway or complete before shifting focus. Target sections should have 'tabindex="-1"' if they are not naturally focusable.
