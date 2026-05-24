document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (err) {
                    console.error('Navigation error:', err);
                }
            }
        });
    }
    console.log('Portfolio website loaded successfully!');
});