export default function(){

    if( $('.home-header').length != 0 ){
        
        setTimeout( function(){
            $('.home-header a').toggleClass('is-orange');
        }, 1000);
       
    }

    $('.menu-toggle').on('click', function(event){
        event.preventDefault();
        $('nav').toggleClass('is-visible');
        $('.menu-toggle').toggleClass('is-fixed');
    });


    /*let headHeight = $('.small-header').outerHeight();

    $(window).on('scroll', function(){
        let scrollPos = $(window).scrollTop();

        if( scrollPos > headHeight + 200 ){
            $('body').css("paddingTop", headHeight );
            $('.small-header').css({
                "top": '-' + headHeight + 'px',
                "position": "fixed",
            }).animate({
                "top": "0px"
            });

        }else if( scrollPos > 150 ){
            $('body').css("paddingTop","");
            $('.small-header').animate({
                "top": "-" + headHeight + 'px'
            });
        }
    });*/
        


}