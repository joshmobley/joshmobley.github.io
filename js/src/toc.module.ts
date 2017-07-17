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
        let scrollTop : number;
        let winHeight : number;
        let docHeight : number;
        let hash : string = window.location.hash;

        function calcHeights(){

            scrollTop = $(window).scrollTop();
            winHeight = $(window).height();
            docHeight = $(document).height();

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

        }

        function setActiveState(){

            $.each( toc, function(){
                
                if( hash == $(this).attr('href') ){
                    $('.toc-js a[href="#' + this['id'] + '"]').addClass('active');
                }
                if( scrollTop >= this['top']-10 ){
                    $('.toc-js .active').removeClass('active');
                    $('.toc-js a[href="#' + this['id'] + '"]').addClass('active');
                    return true;
                }else if( scrollTop + winHeight >= ( docHeight - 40 ) ){
                    $('.toc-js .active').removeClass('active');
                    $('.toc-js li:last a').addClass('active');
                    return true;
                }
            });

        }

        function writeTOC(){
            $('.writing').append(`<div class="toc-js"></div>`);

            if( Object.keys(toc).length != 0 ){
                $('.toc-js').append('<h3>Table of Contents</h3><ol></ol>');
            }

            $.each( toc, function(){
                $('.toc-js ol').append('<li><a href="#' + this['id'] + '">' + this['text'] + '</a></li>' );
            });

            $('.toc-js').append('<a class="back-link" href="/writing.html">&larr; back to writing');
        }

        calcHeights();
        writeTOC();
        setActiveState();

        $(window).on('scroll resize hashchange', function(){
            calcHeights();
            setActiveState();
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
