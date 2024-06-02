$(document).ready(function() {
    $('form').on('submit', function(event) {
        var isValid = true;

        var name = $('#name').val().trim();
        if (name === "") {
            isValid = false;
            $('#name').tooltip('dispose').tooltip({ title: "The name is needed", trigger: 'manual' }).tooltip('show');
        } else {
            $('#name').tooltip('dispose');
        }

        var email = $('#email').val().trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            $('#email').tooltip('dispose').tooltip({ title: "Input real email", trigger: 'manual' }).tooltip('show');
        } else {
            $('#email').tooltip('dispose');
        }

        var message = $('#message').val().trim();
        if (message === "") {
            isValid = false;
            $('#message').tooltip('dispose').tooltip({ title: "The message is needed", trigger: 'manual' }).tooltip('show');
        } else {
            $('#message').tooltip('dispose');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    $("#login-modal-open-btn").click(function() {
        $("#loginModal").modal("show");
    });
    $("#login-main-btn").click(function() {
        $("#loginModal").modal("show");
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('input, textarea').focus(function() {
        $(this).tooltip('show');
    }).blur(function() {
        $(this).tooltip('hide');
    });

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(this).height();
        var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#progressBar').css('width', scrollPercent + '%');
    });

    $('#loginModal form').on('submit', function(event) {
        var isValid = true;

        var login = $('#loginInput').val().trim();
        if (login === "") {
            isValid = false;
            $('#loginInput').tooltip('dispose').tooltip({ title: "The login is needed", trigger: 'manual' }).tooltip('show');
        } else {
            $('#loginInput').tooltip('dispose');
        }

        var password = $('#passwordInput').val().trim();
        if (password === "") {
            isValid = false;
            $('#passwordInput').tooltip('dispose').tooltip({ title: "The password is needed", trigger: 'manual' }).tooltip('show');
        } else {
            $('#passwordInput').tooltip('dispose');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    $("#scroll-to-top-btn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    const navLinks = $('.nav-link');
    const sections = $('section');

    $(window).on('scroll', function() {
        const currentPosition = $(this).scrollTop();

        sections.each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
                const sectionId = $(this).attr('id');
                navLinks.removeClass('active');
                $(`a[href="#${sectionId}"]`).addClass('active');
            }
        });
    });
});