document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        /**
         * Use event delegation to handle navigation clicks efficiently.
         * This pattern is more performant than attaching listeners to each link.
         */
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            
            /**
             * Security & Robustness:
             * 1. Only manage internal hash links to avoid breaking external navigation.
             * 2. Validate that targetId starts with '#' and has content.
             */
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();

                try {
                    /**
                     * Defensive Coding: document.querySelector can throw a DOMException if the
                     * selector is invalid (e.g., if targetId is manipulated to something like "#.invalid").
                     * Wrapping this in a try-catch ensures the script fails securely without
                     * crashing other client-side logic.
                     */
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without causing a native browser jump
                        history.pushState(null, '', targetId);
                    }
                } catch (error) {
                    // Fail securely: Log the error for development but don't expose details to the UI
                    console.error('Navigation failed for selector:', targetId, error);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
