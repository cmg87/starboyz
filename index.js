document.addEventListener('DOMContentLoaded', () => {

    // --- Glitch Animation for StarBoyz H1 (Initial Load) ---
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        // Simple way to restart animation on load for browsers that don't always do it
        glitchText.style.animation = 'none';
        glitchText.offsetHeight; // Trigger reflow
        glitchText.style.animation = ''; // Re-enable animation
    }

    // --- Parallax Effect for About Us Image (Mobile Only) ---
    const aboutImage = document.querySelector('.about-image.parallax-bg');
    if (aboutImage) {
        // Only apply on screens considered "mobile" for this effect (e.g., max-width 767px)
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        if (isMobile) {
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                window.addEventListener('scroll', () => {
                    const scrollPosition = window.pageYOffset;
                    const sectionTop = aboutSection.offsetTop;
                    const sectionHeight = aboutSection.offsetHeight;
                    const imageHeight = aboutImage.offsetHeight;

                    // Calculate how much the image should move based on scroll within the section
                    // This creates a subtle slower movement for the image
                    if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + sectionHeight) {
                        const revealRatio = (scrollPosition + window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
                        const translateY = (imageHeight - aboutImage.parentElement.offsetHeight) * revealRatio * -0.5; // Adjust multiplier for intensity
                        aboutImage.style.transform = `translateY(${translateY}px)`;
                    }
                });
            }
        } else {
            // Ensure no parallax on desktop if accidentally applied
            aboutImage.style.transform = 'translateY(0)';
        }
    }


    // --- Desktop Only: Red Text Highlight on Hover over White Text ---
    const applyHoverEffect = () => {
        // Check if it's a desktop device (no touch, and wider screen)
        const isDesktop = window.matchMedia("(min-width: 768px)").matches && !('ontouchstart' in window || navigator.maxTouchPoints);

        if (isDesktop) {
            // Find all elements that contain text that should potentially light up red
            // For this design, it's primarily the about section paragraphs and hero subtitle
            const targetElements = document.querySelectorAll('.hero-content p, .about-section p');

            targetElements.forEach(element => {
                // Ensure the text is originally white/off-white against a dark background
                // We'll wrap individual words in spans to apply hover effect
                if (!element.classList.contains('highlight-initialized')) { // Prevent re-initialization
                    element.classList.add('highlight-initialized');

                    const text = element.textContent;
                    element.innerHTML = text.split(/\s+/).map(word => `<span class="hover-highlight">${word}</span>`).join(' ');

                    element.querySelectorAll('.hover-highlight').forEach(span => {
                        span.addEventListener('mouseenter', () => {
                            span.style.color = 'var(--primary-red)';
                            span.style.textShadow = `0 0 5px var(--soft-red-tint)`; // Optional subtle glow
                        });
                        span.addEventListener('mouseleave', () => {
                            span.style.color = ''; // Revert to original CSS color
                            span.style.textShadow = ''; // Remove glow
                        });
                    });
                }
            });
            document.body.classList.remove('no-hover-effect'); // Enable effect
        } else {
            // On mobile/tablet, remove any applied inline styles and disable the effect
            document.body.classList.add('no-hover-effect');
            document.querySelectorAll('.hover-highlight').forEach(span => {
                span.style.color = '';
                span.style.textShadow = '';
            });
            // You might want to unwrap the spans if performance is an issue, but generally not needed.
        }
    };

    // Apply effect on load and whenever window is resized
    applyHoverEffect();
    window.addEventListener('resize', applyHoverEffect);

});