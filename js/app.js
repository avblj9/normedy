$(document).ready(function(){

    $('#leftSidebar').hover(
        function(){
            $('.ser a span, .nav a span, .log a span, .logo path:last-child').stop(true,false).fadeIn(600);
            $('.header_profile').css('marginLeft', '15px');
            $(this).stop(true,false).animate({"width":"100%"}, 600);
            $(".logo svg").stop(true,false).animate({"width":"100%"}, 600);
        },
        function(){
            $('.ser a span, .nav a span, .log a span, .logo path:last-child').stop(true,false).fadeOut(200);
            $('.header_profile').css('marginLeft', '0');
            $(this).stop(true,false).animate({"width":"77px"}, 400);
        }
    );
    
});

