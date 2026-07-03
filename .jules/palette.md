## 2025-05-14 - Programmatic Smooth Scrolling and Focus Management
**Learning:** When overriding default anchor link behavior with `scrollIntoView` for smooth scrolling, the browser's default focus management is lost. This "strands" keyboard and screen reader users at the top of the page or at the link they just clicked, rather than moving their context to the new section.
**Action:** Always pair programmatic scrolling with manual focus management using `target.setAttribute('tabindex', '-1')` and `target.focus()`.
