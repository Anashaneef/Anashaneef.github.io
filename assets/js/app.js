$(document).ready(function () {
    // Navbar
    // $('.nav-home').click(() => {
    //     $('.nav-home').addClass('active')
    //     $('.nav-about, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    // });

    // $('.nav-about').click(() => {
    //     $('.nav-about').addClass('active')
    //     $('.nav-home, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    // });

    // $('.nav-education').click(() => {
    //     $('.nav-education').addClass('active')
    //     $('.nav-home, .nav-about, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    // });

    // $('.nav-skills').click(() => {
    //     $('.nav-skills').addClass('active')
    //     $('.nav-home, .nav-about, .nav-education, .nav-photoworks, .nav-contact').removeClass('active')
    // });

    // $('.nav-photoworks').click(() => {
    //     $('.nav-photoworks').addClass('active')
    //     $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-contact').removeClass('active')
    // });

    // $('.nav-contact').click(() => {
    //     $('.nav-contact').addClass('active')
    //     $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-photoworks').removeClass('active')
    // });

    // $(document).scroll(() => {
    //     if (window.innerWidth > 10) {
    //         if ($(this).scrollTop() >= 0 && $(this).scrollTop() < $('#about-me').offset().top) {
    //             $('.nav-home').addClass('active')
    //             $('.nav-about, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    //         } else if ($(this).scrollTop() >= $('#about-me').offset().top && $(this).scrollTop() < $('#education').offset().top) {
    //             $('.nav-about').addClass('active')
    //             $('.nav-home, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    //         } else if ($(this).scrollTop() >= $('#education').offset().top && $(this).scrollTop() < $('#skills').offset().top) {
    //             $('.nav-education').addClass('active')
    //             $('.nav-home, .nav-about, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
    //         } else if($(this).scrollTop() >= $('#skills').offset().top && $(this).scrollTop() < $('#photoworks').offset().top) {
    //             $('.nav-skills').addClass('active')
    //             $('.nav-home, .nav-about, .nav-education, .nav-photoworks, .nav-contact').removeClass('active')
    //         } else if($(this).scrollTop() >= $('#photoworks').offset().top && $(this).scrollTop() < $('#contact').offset().top) {
    //             $('.nav-photoworks').addClass('active')
    //             $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-contact').removeClass('active')
    //         } else if ($(this).scrollTop() >= $('#contact').offset().top) {
    //             $('.nav-contact').addClass('active')
    //             $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-photoworks').removeClass('active')
    //         }
    //     }
    // })

    $(document).scroll(() => {
        if (window.innerWidth > 375) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 580) {
                $('.nav-home').addClass('active')
                $('.nav-about, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 580 && $(this).scrollTop() < 1247) {
                $('.nav-about').addClass('active')
                $('.nav-home, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 1247 && $(this).scrollTop() < 2012) {
                $('.nav-education').addClass('active')
                $('.nav-home, .nav-about, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 2012 && $(this).scrollTop() < 2578) {
                $('.nav-skills').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 2578 && $(this).scrollTop() < 5043) {
                $('.nav-photoworks').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-contact').removeClass('active')
            } else {
                $('.nav-contact').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-photoworks').removeClass('active')
            }
        }
        else {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 613) {
                $('.nav-home').addClass('active')
                $('.nav-about, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 613 && $(this).scrollTop() < 1557) {
                $('.nav-about').addClass('active')
                $('.nav-home, .nav-education, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 1557 && $(this).scrollTop() < 3296) {
                $('.nav-education').addClass('active')
                $('.nav-home, .nav-about, .nav-skills, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 3296 && $(this).scrollTop() < 4275) {
                $('.nav-skills').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-photoworks, .nav-contact').removeClass('active')
            } else if ($(this).scrollTop() >= 4275 && $(this).scrollTop() < 6164) {
                $('.nav-photoworks').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-contact').removeClass('active')
            } else {
                $('.nav-contact').addClass('active')
                $('.nav-home, .nav-about, .nav-education, .nav-skills, .nav-photoworks').removeClass('active')
            }
        }
    })

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        console.log(scrolled);
    })
    // Akhir Navbar

    // Education
    $('.card-mi').hover(function () {
        $('.school-mi, .year-mi').fadeOut().fadeIn().css("display", "block");
    }, function () {
        $('.school-mi, .year-mi').css("display", "none");
    });

    $('.card-mts').hover(function () {
        $('.school-mts, .year-mts').fadeOut().fadeIn().css("display", "block");
    }, function () {
        $('.school-mts, .year-mts').css("display", "none");
    });

    $('.card-ma').hover(function () {
        $('.school-ma, .year-ma').fadeOut().fadeIn().css("display", "block");
    }, function () {
        $('.school-ma, .year-ma').css("display", "none");
    });

    $('.card-kuliah').hover(function () {
        $('.school-kuliah, .year-kuliah').fadeOut().fadeIn().css("display", "block");
    }, function () {
        $('.school-kuliah, .year-kuliah').css("display", "none");
    });
    // Akhir Education
});