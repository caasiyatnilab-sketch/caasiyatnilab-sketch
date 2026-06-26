## 2026-06-26 - Native Smooth Scrolling
**Learning:** Migrating smooth scrolling from JavaScript (`scrollIntoView({ behavior: 'smooth' })`) to native CSS (`scroll-behavior: smooth`) offloads animation work to the browser's compositor thread, reducing main thread execution. Additionally, it preserves default browser behavior like URL hash updates, which is better for accessibility and deep-linking.
**Action:** Always prefer native CSS `scroll-behavior: smooth` over JavaScript implementations for simple anchor navigation.
