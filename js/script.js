document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const closeMenuLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-menu a');
    closeMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });

    // Mobile Dropdown Toggle (Separate Text and Arrow)
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                // Toggle ONLY if arrow is clicked, or if the main link is clicked while already active?
                // The user wants comfortable separate clicking.
                if (e.target.classList.contains('arrow')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const parent = dropdownToggle.parentElement;
                    parent.classList.toggle('active');
                }
            }
        });
    }

    // Header scroll background effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let autoPlay;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Touch Support for Swiping
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    const heroSection = document.getElementById('home');

    if (heroSection) {
        heroSection.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        heroSection.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
            resetAutoPlay();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
            resetAutoPlay();
        }
    }



    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, slideInterval);
    }

    function resetAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    // Initialize AutoPlay
    if(slides.length > 0) {
        startAutoPlay();
    }

    // Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const statSection = document.querySelector('.stats-container');

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const duration = 2000; // 2 seconds animation
        const frameRate = 1000 / 60; // 60fps
        const totalFrames = duration / frameRate;
        const increment = target / totalFrames;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), frameRate);
        } else {
            counter.innerText = target;
        }
    };

    const observerOptions = {
        threshold: 0.2
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => countUp(counter));
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (statSection) {
        counterObserver.observe(statSection);
    }
});
