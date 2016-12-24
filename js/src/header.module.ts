export default function(){

    if( $('.home-header').length != 0 ){
        
        setTimeout( function(){
            $('.home-header a').toggleClass('is-orange');
        }, 200);
       
    }

    $('.menu-toggle').on('click', function(event){
        event.preventDefault();
        $('nav').toggleClass('is-visible');
        $('.menu-toggle').toggleClass('is-fixed');
    })

}