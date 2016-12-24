import { TOC } from './toc.module';
import { formStyles, formSubmit } from './forms.module';
import * as $ from 'jquery';

$(document).ready( function(){

    if( $('form').length != 0 ){
        formStyles();
        formSubmit();
    }

    if( $('.writing').length != 0){
        let toc : TOC = new TOC;
        toc.buildTOC();

        $(window).on( 'scroll', function(){
            var scroll = $(window).scrollTop();
            if( scroll > 50 ){
                toc.repositionTOC('up');
            }else{
                toc.repositionTOC('down');
            }
        });
    }

    if( $('.home-header').length != 0 ){
        
        setTimeout( function(){
            console.log( 'running');
            $('.home-header a').toggleClass('is-orange');
        }, 200);

        

           /* let delay = 0;

             $('.home-header .skills li').each( function(){
                 let top = Math.floor((Math.random() * (85-15 + 1)) + 15);
                 let left = Math.floor((Math.random() * (85-15 + 1)) + 15);
                 let opacity = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
             
                 $(this).delay(delay).animate({
                     'opacity': opacity/10
                 }).delay(3500).animate({
                     'opacity': 0
                 });
             
                 $(this).css({
                     'top': top+'%',
                     'left': left+'%',
                 });
             
                 delay += 1000;
                 
             });*/



       
    }

});