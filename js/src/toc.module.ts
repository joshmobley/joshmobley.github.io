export class TOC{

    constructor(){ }

    buildTOC() : void {

        interface TOC {
            [key: string]: {
                text : string,
                id : string,
                top : number
            } 
        }

        let toc : TOC = {};

        $('.writing h3').each(function(){
            let text : string = $(this).text();
            let id : string = $(this).attr('id');
            let top : number = $(this).offset().top;

            toc[text] = {
                'text': text,
                'id': id,
                'top': top
            }
            
        });

        $('.writing').append(`<div class="toc-js"><h3>Table of Contents</h3><ol></ol></div>`);

        $.each( toc, function(){
            $('.toc-js ol').append('<li><a href="#' + this['id'] + '">' + this['text'] + '</a></li>' );
        });

        $('.toc-js').append('<a href="/writing.html">&larr; back to writing');

        $(window).on('scroll', function(){
            let scroll = $(window).scrollTop();
            
            $.each( toc, function(){
                if( scroll >= this['top']-10 ){
                    $('.toc-js .active').removeClass('active');
                    $('.toc-js a[href="#' + this['id'] + '"]').addClass('active');
                    return true;
                }
            });

        });

        $(window).on('hashchange', function(event){
            let hash = window.location.hash;

            $('.toc-js a').each(function(){
                $(this).removeClass('active');
                if( hash == $(this).attr('href') ){
                    $(this).addClass('active');
                }
            });
        });
        
    }

    destroyTOC() : void {
        $('.toc-js').remove();
    }

    repositionTOC( direction: string ) : void {
        if( direction == 'up'){
            $('.toc-js').css('padding-top', '2em');
        }else if( direction == 'down' ){
            $('.toc-js').css('padding-top', '');
        }
    }

    


}