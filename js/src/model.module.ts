import { TOC } from './toc.module';
import 'prism';

export default function(){

    $('.model-open').on( 'click', 
        function(event){
            event.preventDefault();
            let model       : string = $(this).data('model');
            let embedURI    : string = $(this).attr('href');
            let contentType : string = 'work';
            modelBuild(model, embedURI, contentType);
        }
    );

    $('.model-blog').on( 'click', 
        function( event ){
            event.preventDefault();
            let model       : string = $(this).attr('href');
            let embedURI    : string = $(this).attr('href');
            let contentType : string = 'writing';
            modelBuild( model, embedURI, contentType);
        }
    );

}

function modelBuild( 
    modelData   : string, 
    embedURI    : string, 
    contentType : string, 
    modelObj    : string = '#model' 
){

    let close   : JQuery = $( modelObj + ' .model-close' );
    let obj     : JQuery = $( modelObj );
    let content : JQuery = $( modelObj + ' .model-content' );
    let toc     : TOC = new TOC;

    if( contentType == 'work' ){
        let embed : JQuery = $( modelObj + ' iframe');
        embed.attr('src', embedURI);
        $( obj ).removeClass().addClass('work');
        $.get( contentType + "/" + modelData + '/content.html', function(data){
            content.html(data);
        });
    }
    
    if( contentType == 'writing' ){
        $( obj ).removeClass().addClass('writing');
        $.get( embedURI , function(data){
            content.html(data);
            Prism.highlightAll(true);
            toc.destroyTOC();
            toc.buildTOC();
        });
        
    }
    
    $('body').css('overflow', 'hidden');

    obj
        .fadeIn();
    close
        .off()
        .on( 'click', function(event){
            event.preventDefault();
            $(modelObj).fadeOut();
            $('body').css('overflow','auto');
        });
        
}
