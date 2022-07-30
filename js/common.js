
$(document).ready(function() {

  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });

  slidebarInit(); //add by elson for mobile menu


  $('.box-menu ul li').hover(function() {
    $(this).addClass('selected');
  }, function() {
    $(this).removeClass('selected');    
  });

  back_to_top_left();
  

  $('.select-year .cur').on('click',function () {
    var o = $(this).next('ul');
    if(o.is(':hidden')) {
      o.stop(true,true).slideDown(500);
    }else {
      o.stop(true,true).slideUp(500);
    }
  });

  $('.select-year').on('mouseleave', function () {
    $(this).find('ul').stop(true,true).slideUp();
  });


});

function back_to_top_left() {
  var o_left = $('.container').offset().left,
      left_menu_width = $('.left-menu').width(),
      back2top_width = $('#back-to-top').width();
  var mar_left = o_left+((left_menu_width-back2top_width)/2);
  if(mar_left<0) {
    mar_left=4;
  }
  if($('.left-menu').length>0) {
    $('#back-to-top').css({'left':mar_left+'px'});
  }else {
    $('#back-to-top').css({'right':'1%'});
  }
  

  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  $(window).bind('scroll', function () {
    if($(window).scrollTop() > 100) {
      $('#back-to-top').fadeIn(300);
    }else {
      $('#back-to-top').fadeOut(300);
    }
  });

}


function mobilecheck() {
  var check = false;
  (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function slidebarInit() {

  var container = document.getElementById( 'st-container' ),
    $mcontent = $('#menu > .menu'),
    eventtype = 'touchstart, click',
    effect = 3;

    var $mobilemenu = $('<nav id="menu-mobile" class="st-menu menu-mobile st-effect-'+effect+' hidden-md hidden-lg"><div class="menu-mobile-inner"><div class="menu-mobile-title"><div class="button-close-menu"><i class="fa fa-times-circle-o"></i></div></div></div></nav>');
        $(".menu-mobile-inner", $mobilemenu ).append( $mcontent.clone() );  

        $("#st-pusher").append( $mobilemenu ); 
         $(".menu", $mobilemenu  ).removeClass("menu").addClass("menu-mobile-content");
         $("#menu-mobile").find('.sub-menu').removeClass("sub-menu").addClass("mobile-dropdown-menu")
         $("#menu-mobile li.dropdown").append('<span class="mobile-more"><i class="fa fa-angle-down"></i></span>');
    
    $('#btn-mobile-menu').bind(eventtype, function (e) {
      $('html, body').animate({ scrollTop: 0 }, 0);  //add on 20170104
      $(container).toggleClass('st-menu-open').addClass('st-effect-'+effect);
      $('#st-pusher').bind(eventtype, function() {
                $(container).removeClass( "st-menu-open" );
                $('#st-pusher').unbind( eventtype );        
            
      });
            e.stopPropagation();       
            return false;       
    });

    $('#menu-mobile').bind(eventtype, function (e) {
      e.stopPropagation();
    });
    $('#menu-mobile .button-close-menu').on(eventtype, function () {
      $(container).removeClass('st-menu-open');
    });

    $('#menu-mobile .menu-mobile-content li.dropdown > a, #menu-mobile .menu-mobile-content li.dropdown > .mobile-more').on('click', function () {
      $(this).parent('li').toggleClass('mobile-sub-open').siblings('li').removeClass('mobile-sub-open');
      return false;
    });
    $('#menu-mobile .menu-mobile-content li.dropdown > a').on('click', function () {
      return false;
    });

}


function runGallery() {
  function changeImage( el, pos ) {

    $preview.attr( 'src', el.data( 'preview' ) );
    $preview_popup.attr( 'href', el.data( 'popup' ) );
    $preview_popup.data( 'index', el.data( 'index' ) );
    $carouselItems.removeClass( 'current-img' );
    el.addClass( 'current-img' );
    carousel.setCurrent( pos );

  }
  
  var current = 0,
  $preview = $( '#preview' ),
  $preview_popup = $( '#preview-popup' ),
  $carouselEl = $( '#carousel' ),
  $carouselItems = $carouselEl.children(),
  carousel = $carouselEl.elastislide( {
      current : current,
      minItems : 3,
      onClick : function( el, pos, evt ) {

          changeImage( el, pos );
          evt.preventDefault();

      },
      onReady : function() {
          changeImage( $carouselItems.eq( current ), current );
      }
  } ); 
}



window.onresize = function(){
  if(document.body.scrollWidth > 767) {
    $('#st-container').removeClass('st-menu-open');
  }

  back_to_top_left();
  
};





function refreshCaptcha(o, l, co) {
   // o.after('<i class="fa fa-circle-o-notch fa-spin my-fa"></i>');
/*
  l += Math.round(Math.random()*10000);
  var n = new Image();
  n.src = l;
  n.onload = function(){
    n.onload = null;
    co.attr('src', n.src);
    // $('.my-fa').remove();
  }; */ 
  l += Math.round(Math.random()*10000);
  //alert(l);
  co.attr('src', l);
}
