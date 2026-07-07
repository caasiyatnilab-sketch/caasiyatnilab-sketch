## 2025-05-14 - Smooth Scrolling and Focus Management
**Learning:** When implementing programmatic smooth scrolling (e.g., via `scrollIntoView`), it is critical to also manage focus by calling `.focus()` on the target element. This ensures that keyboard and screen reader users aren't left stranded at the previous focus location while the viewport has moved. To make sections focusable without adding them to the tab order, use `tabindex="-1"`.
**Action:** Always pair programmatic scrolling with focus management and ensure target elements are focusable.

## 2025-05-14 - Sticky Headers and Scroll Padding
**Learning:** Sticky headers often obscure content when navigating to anchor links. Using `scroll-padding-top` on the `html` or `body` element is a clean, CSS-only way to provide an offset that prevents this, ensuring that the target content starts below the header.
**Action:** Use `scroll-padding-top` when implementing sticky headers to maintain visibility of anchor targets.
