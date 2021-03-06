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


// =============================

  // О театре
  $('.about-more-btn').click(function () {
    $('.about-more').toggleClass('about-all');
    $(this).toggleClass('about-hide');
    $('.block-1').toggleClass('block-padding');
    $('.pics-block').toggleClass('show-pics');
    $('.about-us').toggleClass('about');
    if (!$(this).hasClass('about-hide')) {
      window.setTimeout(function () {
        $('html,body').animate({scrollTop:$("#about").offset().top}, 700);
      }, 150);
    }
  });

// =============================

  // Афиша
  $('.info-btn').click(function () {
    var btnId = $(this).prop('value');
    // Получаем в переменной значение (value) и подставляем к id блока который нужно открыть.
    var tableId = $(this).attr('data-id');
    // Получаем в переменной значение (data-id) и подставляем к id блоку который будет ам-нимирован кпри закрытии к верхней позиции.
    $('#'+btnId).toggleClass('descript-all');
    $(this).toggleClass('descript-hide');
    // Если кнопка не имеет класса *** топлавно поднимаем данный блок к верху.
    if (!$(this).hasClass('descript-hide')) {
      window.setTimeout(function () {
        $('html,body').animate({scrollTop:$('#'+tableId).offset().top}, 700);
      }, 150);
    }
  });

// =============================

  // Анимация
  $(window).scroll( function (e) {

    // Классы
    var aboutEl = $('.about');
    var robotEl = $('.parallax-robot');
    // Неизменны
    var winTop = $(this).scrollTop();
    var winHeight = $(this).height();
    var winBottom = (winTop + winHeight);

  // Паралакс
    var aboutHeight = aboutEl.height();
    var aboutOutWin = (aboutHeight + winHeight);
    if (winTop <= aboutOutWin) {
      aboutEl.css('transform', 'translate3d(0px, -'+ winTop/60 +'%, 0px)');
    }
    var robotTop = robotEl.offset().top;
        console.log(robotTop);
    var robotHeight = robotEl.height();
    if (robotTop <= winBottom) {
      robotEl.css('transform', 'translate3d(0px, '+ winTop /50 +'%, 0px)');
    }

  });

// =============================

  // Загрузчик
    $('.preloader').delay(600).fadeOut('fast');

// =============================
});
