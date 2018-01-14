$(document).ready(function() {

// =============================

// Плавная прокрутка по сайту
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

// =============================

// Кнопка меню
  $('#checkbox').click(function () {

    var $navBox = $('#checkbox');
    var $navBtn = $navBox.prop('checked');
    var $navAll = $('.all-link');
    if ($navBtn == true) {
      $navAll.css('left', '0px');
      $('.link').click(function () {
        $navAll.css('left', '-300px');
        $navBox.prop('checked', false);
      });
      $('.navi').mouseleave(function () {
        $navAll.css('left', '-300px');
        $navBox.prop('checked', false);
      });
    } else {
      $navAll.css('left', '-300px');
    }
  });

// =============================

  // Кнопка меню
  $('#checklang').click(function () {

    var $langBox = $('#checklang');
    var $langBtn = $langBox.prop('checked');
    var $langAll = $langBox.parents('.langbox');
    //console.log($langBtn);
    if ($langBtn == true) {
      $langAll.css('height', '260px');
      $('.langbox').mouseleave(function () {
        $(this).css('height', '70px');
        $langBox.prop('checked', false);
      });
    } else {
      $langAll.css('height', '70px');
    }
  });

// =============================

  // О театре
  $('.about a').click(function () {
    $('.about-more').toggleClass('about-more-show');
    $('.bg-block-1').toggleClass('about-hide');
  });
  $('.close-bt').click(function () {
    $('.bg-block-1').toggleClass('about-hide');
    $('.about-more').toggleClass('about-more-show');
  });

// =============================

  // Афиша
  $('.info-btn').click(function () {
    var btnId = $(this).prop('value');
    // console.log(btnId);
    $('#'+btnId).toggleClass('descript-all');
    // $('.description').toggleClass('descript-all2');
    
    // var info = $('.info');

    // $('#'+info).toggleClass();
    // var boxId = $(this).prop('id');
    // console.log(info);
    // $('.info').addClass('descript-all');
    // if ($('.info').hasClass('descript-all')) {
    //   $('.info').removeClass('descript-all');
      
    // } 
    
    
    // $(btnId).toggleClass('descript-all');
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
    // var sityEl = $('.bg-block-4');
    var robotEl = $('.parallax-robot');
    // Неизменны
    var $winTop = $(this).scrollTop();
    var $winHeight = $(this).height();
    var $winBottom = ($winTop + $winHeight);

    // Подстановки классов
      // Класс .about
      // var $elAbout = $animAbout.offset().top;
      // var $posAbout = ($elAbout - $winHeight / 1.2);
      // if ($winTop > $posAbout) {
      //   $animAbout.addClass('anim-blur');
      // };
      // // Класс .timetable
      // $animTimetable.each(function(i) {
      //   var $elTimetable = $animTimetable.offset().top;
      //   var $posTimetable = ($elTimetable - $winHeight / 1.2);
      //   if ($winTop > $posTimetable) {
      //     setTimeout(function () {
      //       $animTimetable.eq(i).addClass('anim-bottom');
      //     }, 200 * (i+1));
      //   }
      // });

  // Паралакс
    var aboutHeight = aboutEl.height();
    var $aboutOutWin = (aboutHeight + $winHeight);
    if ($winTop <= $aboutOutWin) {
      aboutEl.css('transform', 'translate3d(0px, -'+ $winTop/30 +'%, 0px)');
    }

    // var geoHeight = geoEl.height();
    // var $geoOutWin = (geoHeight + $winHeight);
    // if ($winTop <= (geoHeight + $geoOutWin)) {
    //   geoEl.css('transform', 'translate3d(0px, -'+ $winTop /15 +'%, 0px)');
    // }

    // var sityTop = sityEl.offset().top;
    // var sityHeight = sityEl.height();
    // if (sityTop <= $winBottom) {
    //   sityEl.css('transform', 'translate3d(0px, -'+ $winTop /100 +'%, 0px)');
    // }

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
