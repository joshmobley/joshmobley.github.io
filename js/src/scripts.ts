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

});