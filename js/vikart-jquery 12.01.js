$(document).ready(function() {

// =============================

// Плавная прокрутка по сайту
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

// =============================

// Кнопка меню
$('.link').click(function() {
  $('#checkbox').prop('checked', false);
});
  // $('#checkbox').click(function () {

  //   var $navBox = $('#checkbox');
  //   var $navBtn = $navBox.prop('checked');
  //   var $navAll = $('.all-link');
  //   if ($navBtn == true) {
  //     $navAll.css('left', '0px');
  //     $('.link').click(function () {
  //       $navAll.css('left', '-300px');
  //       $navBox.prop('checked', false);
  //     });
  //     $('.navi').mouseleave(function () {
  //       $navAll.css('left', '-300px');
  //       $navBox.prop('checked', false);
  //     });
  //   } else {
  //     $navAll.css('left', '-300px');
  //   }
  // });

// =============================

  // Кнопка меню
  // $('#checklang').click(function () {

  //   var $langBox = $('#checklang');
  //   var $langBtn = $langBox.prop('checked');
  //   var $langAll = $langBox.parents('.langbox');
  //   //console.log($langBtn);
  //   if ($langBtn == true) {
  //     $langAll.css('height', '260px');
  //     $('.langbox').mouseleave(function () {
  //       $(this).css('height', '70px');
  //       $langBox.prop('checked', false);
  //     });
  //   } else {
  //     $langAll.css('height', '70px');
  //   }
  // });

// =============================

  // О театре
  // $('.about button').click(function () {
  //   $('.about-more').toggleClass('about-more-show');
  //   $('.bg-block-1').toggleClass('about-hide');
  // });
  // $('.about-more button').click(function () {
  //   $('.bg-block-1').toggleClass('about-hide');
  //   $('.about-more').toggleClass('about-more-show');
  // });
  $('.about-more-btn').click(function () {
    $('.about-more').toggleClass('about-all');
    $(this).toggleClass('about-hide');
  });

// =============================

  // Афиша
  $('.info-btn').click(function () {
    var btnId = $(this).prop('value');
    // Получаем в переменной значение (value) и подставляем к id блока который нужно открыть.
    $('#'+btnId).toggleClass('descript-all');
    $(this).toggleClass('descript-hide');
  });


// =============================

  // Актёры
  var $open = $('.actor');
  var $close = $('.close-legenda');

  $open.click(function () {
    $(this).addClass('checked');
    $('.actor').not(this).addClass('no-checked-actor');
    $(this).children('.hover').addClass('hide-hover');
    $(this).children('.legenda').addClass('show-legenda');
    $(this).parent().addClass('bg-checked');
  });
  $close.click(function (e) {
    e.stopPropagation(); // Используем если много разных запросов в DOM
    $(this).parents('.actor').removeClass('checked');
    $(this).parents('.actor').siblings().removeClass('no-checked-actor');
    $(this).parent().siblings('.hover').removeClass('hide-hover');
    $(this).parent('.legenda').removeClass('show-legenda');
    $(this).parents('.our-team').removeClass('bg-checked');
  });

// =============================

  // Анимация
  $(window).scroll( function (e) {

    // Классы
    var aboutEl = $('.about');
    var $animAbout = $('.about a');
    var robotEl = $('.parallax-robot');
    // Неизменны
    var $winTop = $(this).scrollTop();
    var $winHeight = $(this).height();
    var $winBottom = ($winTop + $winHeight);

  // Паралакс
    var aboutHeight = aboutEl.height();
    var $aboutOutWin = (aboutHeight + $winHeight);
    if ($winTop <= $aboutOutWin) {
      aboutEl.css('transform', 'translate3d(0px, -'+ $winTop/30 +'%, 0px)');
    }
    var robotTop = robotEl.offset().top;
    var robotHeight = robotEl.height();
    if (robotTop <= $winBottom) {
      robotEl.css('transform', 'translate3d(0px, '+ $winTop /50 +'%, 0px)');
    }

  });

// =============================

  // Загрузчик
    $('.preloader').delay(600).fadeOut('fast');

// =============================
});
