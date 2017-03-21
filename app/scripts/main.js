
$( document ).ready(function() {
    $( document ).mousemove( function( e ) {
         $( '.landingPage__img' ).parallax( 20, e );
         $( '.template' ).parallax( 20, e );
     });
     $.fn.parallax = function ( resistance, mouse )
     {
         $el = $( this );
         TweenLite.to( $el, 0.1,
                 {
                     x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
                     y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
                 });
     };
});

$(document).ready(function(){
  window.sr = ScrollReveal();
sr.reveal('.team__portraits',{
  distance: '100px',
  origin: 'left',
  duration: 1000
});

sr.reveal('.team__function',{
  distance: '100px',
  origin: 'bottom',
  delay: 0.5,
  duration: 1000
});

sr.reveal('.bloc__macbook',{
  distance: '200px',
  origin: 'left',
  duration: 1000
});

sr.reveal('.--left',{
  distance: '200px',
  origin: 'left',
  duration: 1000
});

sr.reveal('.--right',{
  distance: '200px',
  origin: 'right',
  duration: 1000
});

sr.reveal('.offer ul li',{
  distance: '500px',
  origin: 'bottom',
  duration: 1000
});
})


var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            window.location.href='https://www.youtube.com/watch?v=CsGYh8AacgY';
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});