## 2024-05-15 - Scroll-Spy and Focus Management
**Learning:** Programmatic smooth scrolling without focus management can "strand" keyboard and screen reader users at the navigation menu while the viewport moves elsewhere. Always pair `.scrollIntoView()` with `.focus()` on the target element (using `tabindex="-1"` if needed) to ensure the accessibility tree follows the visual scroll.
**Action:** Implement focus management and active state highlighting using `IntersectionObserver` for all long-scroll single-page interfaces.
