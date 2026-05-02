## 2025-05-14 - [Accessibility & Navigation]
**Learning:** Native CSS `scroll-behavior: smooth` combined with `tabindex="-1"` on target sections is superior to custom JS scrolling. It preserves native browser behavior (URL hash updates, back/forward navigation) while ensuring that keyboard focus correctly moves to the content section, which is vital for screen reader users.
**Action:** Prefer native CSS for smooth scrolling and always ensure target elements of in-page navigation have `tabindex="-1"`.
