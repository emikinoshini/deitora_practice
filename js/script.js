//ドロワーメニュー
jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
});


//swiper
var Swiper = new Swiper( '.swiper', {
  spaceBetween: 20,
  width: 274,
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
  breakpoints: {
    768: {   //768以上
      width: 400,
      spaceBetween: 40,
    }
  }
});

//Q&A アコーデｲオン
jQuery('.qa-box-q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box-icon').toggleClass('is-open');
});

//スムーススクロール
jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;

  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

//スクロールに応じて表示する
jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show')
  } else {
    jQuery('.to-top').removeClass('is-show')
  }  
});

//クリックイベント
jQuery('.header-nav li a').on('click', function() {
  jQuery('.header-nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});


new WOW().init()


//googleフォーム
let $form = $( '#js-form' )
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理
        $form.slideUp()
        $( '#js-error' ).slideDown() 
      }
    } 
  });
  return false; 
}); 


//formの入力確認
let $submit = $( '#js-submit' )
$( '#js-form select, #js-form input, #js-form textarea' ).on( 'change', function() {
  if(
    $( '#js-form input[name="entry.2119509859"]' ).val() !== "" &&
    $( '#js-form input[name="entry.668749103"]' ).val() !== "" &&
    $( '#js-form input[name="entry.1277665631_sentinel"]' ).prop( 'checked' ) === true
  ) {
    $submit.prop( 'disabled', false )
    $submit.addClass( '-active' )
  } else {
    $submit.prop( 'disabled', true )
    $submit.removeClass( '-active' )
  }
})



