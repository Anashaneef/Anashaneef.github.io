$(document).ready(function () {
    // Navbar
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
    // End of Navbar
});