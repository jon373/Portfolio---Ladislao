$(document).ready(function() {
    
    // Back to Top button visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#backToTop").addClass("visible");
        } else {
            $("#backToTop").removeClass("visible");
        }
    });
    
    // Back to Top click
    $("#backToTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    
    // ScrollReveal animations
    ScrollReveal({
        distance: "60px",
        duration: 1500,
        delay: 200,
        reset: false
    });
    
    ScrollReveal().reveal(".profile-photo", { origin: "left" });
    ScrollReveal().reveal(".profile-text", { origin: "right" });
    ScrollReveal().reveal(".section-title", { origin: "top" });
    ScrollReveal().reveal(".about-container, .education-grid, .projects-container, .skills-container, .contact-box", { origin: "bottom" });

    // Dark/Light Mode Toggle
    $('#themeToggle').click(function() {
        $('body').toggleClass('light-theme');
        
        const icon = $(this).find('i');
        const isLight = $('body').hasClass('light-theme');
        
        icon.toggleClass('fa-moon', !isLight);
        icon.toggleClass('fa-sun', isLight);
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    
    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        $('body').addClass('light-theme');
        $('#themeToggle i').removeClass('fa-moon').addClass('fa-sun');
    }
    
    // Smooth scroll for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 600);
        }
    });
});
