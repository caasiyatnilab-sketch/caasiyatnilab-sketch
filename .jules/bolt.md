## 2025-05-15 - Offloading smooth scroll to native CSS
**Learning:** Native CSS `scroll-behavior: smooth` is more performant than JavaScript-based `scrollIntoView` because it can be handled by the browser's compositor thread. Additionally, manual event listeners that duplicate native browser behavior (like history management) can introduce UX bugs such as double history entries.
**Action:** Prefer native browser features for common interactions. Only use JavaScript when complex logic or browser support dictates it.
