## 2025-05-15 - Native Scroll and Scope Creep
**Learning:** Offloading smooth scrolling to CSS (`scroll-behavior: smooth`) is more efficient than JS implementations as it runs on the compositor thread. However, cleaning up the JS logic and ensuring no temporary artifacts (like `server.log`) are left behind is crucial for repository hygiene. Also, even well-intentioned optimizations like system font stacks can be seen as out-of-scope design changes.
**Action:** Always verify the diff for accidental file inclusions before submission and separate performance wins from design tweaks.
