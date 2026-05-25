/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPTS
   Author: Tanush Rajkumar
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector(".projects-grid");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!projectsGrid || !prevBtn || !nextBtn) return;

    // Amount to scroll per click
    const scrollAmount = 400;

    // Scroll right
    nextBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    // Scroll left
    prevBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    // Optional: hide/show buttons at edges
    const updateButtons = () => {
        const maxScrollLeft =
            projectsGrid.scrollWidth - projectsGrid.clientWidth;

        prevBtn.disabled = projectsGrid.scrollLeft <= 0;
        nextBtn.disabled = projectsGrid.scrollLeft >= maxScrollLeft - 5;
    };

    projectsGrid.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();
    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            body.classList.toggle('overflow-hidden'); // Custom lock scroll if needed
        });

        // Close mobile menu when a nav link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                navMenu.classList.remove('open');
                body.classList.remove('overflow-hidden');
            });
        });
    }

    // ==========================================
    // 2. Header Scroll Effect & Active Link Highlight
    // ==========================================
    const header = document.querySelector('.main-header');
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky header class injection
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking based on scroll position
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for sticky header height
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 3. Hover Cursor Spotlight Effect on Project Cards
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse X coordinate relative to card
            const y = e.clientY - rect.top;  // Mouse Y coordinate relative to card

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // ==========================================
    // 4. High-Performance IntersectionObserver Scroll Reveals
    // ==========================================
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    // Apply reveal animations to cards and sections
    const elementsToReveal = [
        ...document.querySelectorAll('.highlight-card'),
        ...document.querySelectorAll('.section-header'),
        ...document.querySelectorAll('.about-text-wrapper'),
        ...document.querySelectorAll('.about-visual'),
        ...document.querySelectorAll('.skills-compact-card'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.edu-card'),
        ...document.querySelectorAll('.achievement-card'),
        ...document.querySelectorAll('.contact-info'),
        ...document.querySelectorAll('.contact-form')
    ];

    // Inject base animation classes dynamically to keep CSS clean
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

        revealObserver.observe(el);
    });

    // Define 'revealed' class injection style dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // ==========================================
    // 6. Neural Network / Node Mesh Background Canvas
    // ==========================================
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 140 };

        // Set high-res canvas scaling
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        window.addEventListener('resize', resizeCanvas);

        // Track cursor coordinates for interactive mesh repulsions
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Particle Blueprint Class
        class Particle {
            constructor(x, y, dx, dy, size, color) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.color = color;
                this.baseSize = size;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Boundary check & reverse direction
                if (this.x > canvas.width || this.x < 0) {
                    this.dx = -this.dx;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.dy = -this.dy;
                }

                // Interactive mouse effect
                if (mouse.x != null && mouse.y != null) {
                    let xs = mouse.x - this.x;
                    let ys = mouse.y - this.y;
                    let distance = Math.sqrt(xs * xs + ys * ys);

                    if (distance < mouse.radius) {
                        // Repel from cursor
                        const forceDirectionX = xs / distance;
                        const forceDirectionY = ys / distance;
                        const maxDistance = mouse.radius;
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = forceDirectionX * force * 2.5;
                        const directionY = forceDirectionY * force * 2.5;

                        this.x -= directionX;
                        this.y -= directionY;
                        this.size = this.baseSize * 1.5;
                    } else {
                        if (this.size > this.baseSize) {
                            this.size -= 0.05;
                        }
                    }
                }

                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            }
        }

        // Initialize node list based on screen surface area
        function initParticles() {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 12000;
            numberOfParticles = Math.min(numberOfParticles, 120); // Cap for performance

            for (let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 2 + 1;
                let x = Math.random() * (innerWidth - size * 2) + size;
                let y = Math.random() * (innerHeight - size * 2) + size;
                let dx = (Math.random() - 0.5) * 0.4;
                let dy = (Math.random() - 0.5) * 0.4;
                // Elegant muted violet or cool cyan color nodes
                let color = Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.25)' : 'rgba(20, 184, 166, 0.2)';

                particles.push(new Particle(x, y, dx, dy, size, color));
            }
        }

        // Draw network mesh lines connecting nearby points
        function connectNodes() {
            let maxDistance = 120;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distSq = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);

                    if (distSq < maxDistance ** 2) {
                        let distance = Math.sqrt(distSq);
                        let opacity = (1 - (distance / maxDistance)) * 0.15;

                        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connectNodes();
            requestAnimationFrame(animate);
        }

        resizeCanvas();
        animate();
    }
});
