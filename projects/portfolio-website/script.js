const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        const href = link ? link.getAttribute('href') : null;
        if (link && href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Native scrollIntoView will use CSS smooth scrolling if available
                    targetSection.scrollIntoView();
                    // Set focus to the target section for accessibility
                    targetSection.focus({ preventScroll: true });
                }
            } catch (error) {
                console.error('Error navigating to section:', error);
            }
        }
    });
}
console.log('Portfolio website loaded successfully!');
