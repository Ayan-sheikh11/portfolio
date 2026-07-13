document.addEventListener("DOMContentLoaded", () => {
            const revealElements = document.querySelectorAll(".reveal");

            const observerOptions = {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const appearanceObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        // If it's a skill item, animate the progress bar inside it
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    } else {
                        entry.target.classList.remove("active");
                        // Reset skill progress bars for re-animation
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            bar.style.width = '0%';
                        });
                    }
                });
            }, observerOptions);

            revealElements.forEach(element => {
                appearanceObserver.observe(element);
            });
        });

        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });