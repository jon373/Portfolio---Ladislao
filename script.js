$(document).ready(function() {

    // Sticky Header Toggle
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }
        
        // Show/hide Back to Top button
        if ($(this).scrollTop() > 300) {
            $("#backToTop").addClass("visible");
        } else {
            $("#backToTop").removeClass("visible");
        }
    });
    
    // Back to Top button functionality
    $("#backToTop").click(function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 600);
    });
    
    // ScrollReveal
    ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
    });
    ScrollReveal().reveal(".profile-photo, .about-content, .education", { origin: "left" });
    ScrollReveal().reveal(".profile-text, .about-skills, .internship", { origin: "right" });
    ScrollReveal().reveal(".project-title, .contact-title, .skills-title", { origin: "top" });
    ScrollReveal().reveal(".projects, .contact, .skills-content", { origin: "bottom" });

    // Form Logic
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
    const form = document.forms['submitToGoogleSheet'];
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully";
                    setTimeout(() => { msg.innerHTML = ""; }, 5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });
    }

    // ===== DARK/LIGHT MODE TOGGLE =====
    $('#themeToggle').click(function() {
        // Toggle light-theme class on body
        $('body').toggleClass('light-theme');
        
        // Get the icon element
        const icon = $(this).find('i');
        
        // Check current theme and update icon
        if ($('body').hasClass('light-theme')) {
            // Switch to SUN icon (light mode)
            icon.removeClass('fa-moon').addClass('fa-sun');
            // Save preference
            localStorage.setItem('theme', 'light');
            console.log('Switched to LIGHT theme');
        } else {
            // Switch to MOON icon (dark mode)
            icon.removeClass('fa-sun').addClass('fa-moon');
            // Save preference
            localStorage.setItem('theme', 'dark');
            console.log('Switched to DARK theme');
        }
    });
    
    // Check for saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    const themeButton = $('#themeToggle');
    const icon = themeButton.find('i');
    
    console.log('Saved theme:', savedTheme);
    
    if (savedTheme === 'light') {
        $('body').addClass('light-theme');
        icon.removeClass('fa-moon').addClass('fa-sun');
        console.log('Applied LIGHT theme on load');
    } else {
        $('body').removeClass('light-theme');
        icon.removeClass('fa-sun').addClass('fa-moon');
        console.log('Applied DARK theme on load');
    }
});