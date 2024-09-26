
document.addEventListener('DOMContentLoaded', function () {

    var toTopAgain = document.getElementById("toTopAgain");

    // window.onscroll = function () {
    //     scrollFunction()
    //     scroll();
    // };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         toTopAgain.style.display = "block";
    //     } else {
    //         toTopAgain.style.display = "none";
    //     }
    // }


    // function scroll() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-60px";
    //     }
    // }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    toTopAgain.addEventListener("click", topFunction);


    const navLink = document.querySelectorAll('.nav-link');

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            navLink.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });


    // window.addEventListener('scroll', () => {
    //     let current = '';
    //     const sections = document.querySelectorAll('section');
    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
    //             current = section.getAttribute('id');
    //             console.log(current);
    //         }
    //     });

    //     const navLinks = document.querySelectorAll('.nav-link');
    //     navLinks.forEach(link => {
    //         link.classList.remove('active');
    //         if (link.classList.contains(current)) {
    //             link.classList.add('active');
    //             console.log(link);
    //         }
    //     });
    // });


    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });

    sr.reveal('.navbar', {
        origin: 'top'


    });


    sr.reveal('.intro', {
        origin: 'bottom'
    });

    sr.reveal('.myself img', {
        origin: 'left',
        interval: 200,
        delay: 100
    });

    sr.reveal('.myself p', {
        origin: 'right',
        interval: 200
    });

    sr.reveal('.skills', {
        origin: 'bottom',
        interval: 200
    });

    sr.reveal('.contact', {
        origin: 'bottom',
        interval: 200
    });

    sr.reveal('.project-section', {
        origin: 'bottom'
    });

    // sr.reveal('.project-items', {
    //     origin: 'top',
    //     distance: '150px',
    //     duration: 1500
    // });

});
