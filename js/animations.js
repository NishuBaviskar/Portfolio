document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS Library
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 2. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 3. Hero Section Entrance Animation
    const tl = gsap.timeline();

    tl.from('.navbar', {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.gsap-reveal', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.4');

    // 4. Skill Bar Animation on Scroll
    const skillBars = document.querySelectorAll('.progress');

    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');

        ScrollTrigger.create({
            trigger: bar,
            start: 'top 85%',
            onEnter: () => {
                bar.style.width = targetWidth;
            }
        });
    });
});