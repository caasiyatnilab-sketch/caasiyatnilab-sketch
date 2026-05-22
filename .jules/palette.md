## 2025-05-14 - Accessible Focus Management for Internal Links
**Learning:** Programmatic focus movement with `element.focus()` requires the target element to be focusable. Non-interactive elements like `<main>` or `<section>` must have `tabindex="-1"` to receive focus via JavaScript without being in the natural tab order.
**Action:** Always add `tabindex="-1"` to target sections or main content containers when implementing smooth scroll or skip-link functionality to ensure keyboard focus follows the visual movement.
