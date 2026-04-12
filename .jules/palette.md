## 2026-04-12 - [Accessible Navigation in Static Portfolios]
**Learning:** For static sites using JS-based smooth scrolling, focus must be manually moved to the target section (which needs tabindex="-1") to ensure accessibility for screen readers and keyboard users. Using 'history.pushState' allows updating the URL hash without triggering the browser's default jump-to-id behavior, maintaining the smooth scroll effect.
**Action:** Always combine 'scrollIntoView', 'history.pushState', and '.focus()' when implementing custom smooth scroll logic.
