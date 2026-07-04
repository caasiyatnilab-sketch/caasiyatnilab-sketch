## 2025-05-14 - Focus Management and Smooth Scrolling
**Learning:** Programmatic smooth scrolling must always be paired with focus management (e.g., using .focus() and tabindex="-1") to avoid stranding keyboard/screen reader users. Without this, the visual scroll happens but the accessibility focus remains on the clicked link, making subsequent tab navigation confusing.
**Action:** Always implement .focus() on the target element after a smooth scroll interaction, ensuring the target has tabindex="-1" if it is not naturally focusable.
