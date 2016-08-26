$(window).load(function(){
  
  $( 'a', '.hover-menu' ).click(function(e){
    
    e.preventDefault();
    
    var url = (window.location.href);
    var href = ($(e.target).attr('href'));
    
    if(url.indexOf(href)<0)
    {
      
      $.ajax({
        url : href + '?ajax='+href.substring(1),
        success : function( result )
        {
          window.history.replaceState('', 'Portfolio', href);
          
          $( 'div.image-wrapper' ).css( { transition : 'transform 1s', transform : 'scale( 0 )' } )
            .on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , function( e )
            {
              $( 'div.image-wrapper' ).off();
              window.history.replaceState('', 'Portfolio', href);
              $('#content-wrapper').replaceWith($(result).find('#content-wrapper'));
          });
        }
      });
      
      
    }
      
    

    
    
    
  });

$( 'body' ).on( 'click' , 'a.pdf-link img', function( e )
{
   e.preventDefault();
   var target = $(e.target);
   var siblings = target.parent().siblings();
   var items = [];
    $(siblings).each(function(i,v)
    {
        var item = {src:$(v).attr('href')+'#view=FitH'};
        items.push(item);
    console.log(items);   
        if( i === siblings.length - 1 )
        {
            $.magnificPopup.open({
                items : items,
                gallery : { enabled : true },
                 type : 'iframe',
              iframe: {
       markup: '<div class="mfp-iframe-scaler my-magnific">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>'
   }
            });
        }

        
    });
  
});

    
    
  

}); 