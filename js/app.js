var rotary = rotary || {};

rotary.init = function(){
    rotary.initCountown();
    rotary.initScrollLinks();
}

rotary.initScrollLinks = function(){
    $('a.scroll-toggle').click(function(){
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top});
    });
}

rotary.initCountown = function(){
    $('.countdown').final_countdown({
        start: new Date("March 1, 2015 8:00:00").getTime() / 1000,
        end: new Date("April 11, 2015 8:00:00").getTime() / 1000,
        now: new Date().getTime() / 1000,
        seconds: {
            borderColor: '#282828',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#282828',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#282828',
            borderWidth: '6'
        },
        days: {
            borderColor: '#282828',
            borderWidth: '6'
        }
    });
}

$(function(){
    rotary.init();
});