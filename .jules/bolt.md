## 2024-04-24 - Prefer Native CSS Smooth Scrolling over JavaScript

**Learning:** Implementing smooth scrolling with JavaScript (`scrollIntoView({ behavior: 'smooth' })`) runs on the main thread and typically requires `event.preventDefault()`, which breaks native URL hash updates and link sharing. Native CSS `scroll-behavior: smooth` is processed on the compositor thread, leading to smoother animations and maintaining full browser navigation functionality (like back/forward buttons and hash updates).

**Action:** Always prefer `html { scroll-behavior: smooth; }` for simple internal page navigation. Only use JavaScript if complex easing functions or specific callback behaviors are required.
