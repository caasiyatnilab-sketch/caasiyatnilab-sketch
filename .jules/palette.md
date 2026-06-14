## 2024-06-14 - Focus Management in Single Page Applications
**Learning:** When using smooth scrolling in SPAs or simple static pages with internal anchors, browsers often don't shift focus to the target element. This breaks keyboard navigation as the next 'Tab' key press starts from the previous location rather than the new visual location.
**Action:** Use JavaScript to manually call `.focus()` on the target element after the scroll completes (or starts) to ensure a consistent experience for keyboard users. Targets must have `tabindex="-1"` if they are not naturally focusable.
