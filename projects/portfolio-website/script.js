const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Function to update active link
function updateActiveLink(id) {
    if (!id) return;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// Set initial active link
updateActiveLink('about');

// Scroll Spy Logic with simple throttling
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let current = 'about';
            
            // Check if at the bottom
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20) {
                current = 'contact';
            } else {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
                    if (window.pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });
            }

            updateActiveLink(current);
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Immediate feedback on click
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        updateActiveLink(targetId);
    });
});

console.log('Portfolio website UX enhanced!');
