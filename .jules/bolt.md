## 2025-05-27 - Compositor-Thread Scroll Offloading
**Learning:** Offloading smooth-scrolling animations from the main JavaScript thread to the CSS compositor thread (via `scroll-behavior: smooth`) significantly reduces frame drops during heavy main-thread activity. It also allows for declarative accessibility handling via `prefers-reduced-motion`.
**Action:** Favor CSS `scroll-behavior` over JS `scrollIntoView` for simple internal navigation; ensure `prefers-reduced-motion` is respected.

## 2025-05-27 - CI Model Availability
**Learning:** GitHub CI bots (like Kilo) may fail with 400 errors if the default model (e.g., `llama-3.3-70b-versatile`) is unavailable in the session. Overriding the model in `.github/bot-state.json` can resolve this.
**Action:** If CI reviews fail due to model availability, explicitly set a fallback model in the repository's bot state configuration.
