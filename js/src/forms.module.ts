interface MessageData {
    [key: string]: string;
}

function textareaRestyle(textarea:JQuery){
    textarea.css('color', '#aaa').val('Write your message here...');
}

function textareaStyle(textarea:JQuery){
    textarea.val('').css('color', '#111');
}

export function formStyles(){
        $('textarea')
            .on( 'focus', function(){
                textareaStyle( $(this) )
            })
            .on( 'focusout', function(){
                if( $(this).val() == '' ){ textareaRestyle( $(this) ); } 
            });
}   
    
export function formSubmit(){
    $('form [type="submit"]').on('click', function(event){
        event.preventDefault();
        let messageData : MessageData = {};
        $('form input, form textarea').each( function(){
            let name  : string = $(this).attr('name');
            let value : string = $(this).val();
            messageData[name] = value; 
        });
        $.ajax({
            url: "https://formspree.io/jmob1986@gmail.com", 
            method: "POST",
            data: messageData,
            dataType: "json"
        }).done( function(data){
            let formHeight : number = $('form').height();
            let formHTML: string = $('.form-content').html();
            $('form').css( 'height', formHeight );
            $('.form-content').animate({ 'opacity': '0' }, 
                function(){
                    let content = $(this);
                    $(this)
                        .html('<h2>Thanks!</h2><p>I&rsquo;ll get back to you soon.</p>')
                        .animate({ 'opacity': '1' });
                    setTimeout( function(){
                        console.log('timeout');
                        content
                            .animate({ 'opacity': '0' },
                                function(){
                                    $(this)
                                        .html(formHTML)
                                        .animate({ 'opacity': '1' });
                                    textareaRestyle($('form textarea'));
                                    formStyles();
                        });
                    }, 5000);
                }
            );
        }).fail( function(){
            $('form h2')
                .after('<p class="error-msg" style="display: none;">Sorry, but something went wrong. Please try again.</p>');
            $('form .error-msg').fadeIn();
        });
    });
}