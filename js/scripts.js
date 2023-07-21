// Чтобы автоматически подсвечивало в меню пункт в соотвествии с тем блоком куда проскроллили (меню сейчас скрыто)
var sectionArray = [1, 2, 3, 4, 5];
$.each(sectionArray, function(index, value){

    $(document).scroll(function(){
        var section = $('#' + 'section_' + value);
        if (section.length) {
            var offsetSection = section.offset().top - 75;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;


            if ( docScroll1 >= offsetSection ){
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
                if ( docScroll1 == 1 ) {
                    $('.navbar').addClass('first-section');
                } else {
                    $('.navbar').removeClass('first-section');
                }
            }
        }

    });
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 75;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });

});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
// END

// Animate element START Запускать анимации повяления
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('animate-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animate-wrapper, .animate-text,.animate-up');
for (let elm of elements) {
    observer.observe(elm);
}
// END
// Переключение белой и тёмной иконки в шапке START
$(window).on('scroll', function(){
    if ( $('#sticky-wrapper').hasClass( "is-sticky" ) ) {
        $('#main-logo').attr("src","images/main-logo.png");
    } else {
        $('#main-logo').attr("src","images/main-logo-white.png");
    }
});
// END