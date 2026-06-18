## 2026-06-18 - Optimized Navigation Performance
**Learning:** Using 'defer' on scripts in the <head> is superior to placing them at the end of the <body> for performance as it starts the download earlier. Also, event delegation on navigation elements reduces memory footprint and initialization overhead by using a single event listener instead of one per link.
**Action:** Default to 'defer' and event delegation for similar interactive components.
