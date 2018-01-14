$(document).ready(function() {

  //О театре
  $('.about a').click(function () {
    $('.about-more').toggleClass('about-more-show');
    $('.bg-block-1').toggleClass('about-hide');
  });
  $('.close-bt').click(function () {
    $('.bg-block-1').toggleClass('about-hide');
    $('.about-more').toggleClass('about-more-show');
  });

  //Актеры
  // var btActor = $('.actor');
  // $('.our-team .actor').click(function () {
  //   if ($(this).hasClass('checked')) {
  //     $(this).toggleClass('checked');
  //     $('.checked .hover').addClass('hide');
  //     $('.checked .legenda').addClass('show');
  //     // btActor.parent().addClass('active-bg');
  //
  //   } else {
  //     $(this).parent().find('>.actor').removeClass('checked');
  //     $(this).addClass('checked');
  //     $('.actor .legenda').css('opacity', '0');
  //     $('.actor .hover').show();
  //     // btActor.parent().removeClass('active-bg');
  //   }
  // });

  // function btActive () {
  //   for (var i = 0; i < $(this).length; i++) {
  //     $(this)[i];
  //
  //   };
  // };

  // Актёры
  var $open = $('.actor');
  var $close = $('.close-legenda');

  $open.click(function () {
    $(this).addClass('checked');
    $('.actor').not(this).addClass('no-checked-actor');
    $(this).children('.hover').addClass('hide-hover');
    $(this).children('.legenda').addClass('show-legenda');
    $(this).parent().addClass('bg-checked');
    // $(this).siblings('.out').addClass('hide-out');
  });
  $close.click(function (e) {
    e.stopPropagation(); // деактивирует
    // $(this).parents().siblings('.out').removeClass('hide-out');
    // $(this).parents().siblings('.no-checked-actor').addClass('actor');
    $(this).parents('.actor').removeClass('checked');
    $(this).parents('.actor').siblings().removeClass('no-checked-actor')
    $(this).parent().siblings('.hover').removeClass('hide-hover');
    $(this).parent('.legenda').removeClass('show-legenda');
    $(this).parents('.our-team').removeClass('bg-checked');
  });

  function myPosition(event) {
    lacation.hash = "link-id";
  };
  // $('#legend').change(function () {
  //   if ((this).is(":checked")) {
  //     console.log('hi');
  //   }
  // });
  // if (legend = false) {
  //   $(this).removeClass('checked');
  //   $('.actor').not(this).removeClass('no-checked-actor')
  //   $(this).children('.hover').removeClass('hide-hiver');
  //   $(this).children('.legenda').removeClass('show-legenda');
  //   $(this).parent().removeClass('bg-checked');
  // }

  // Рабочий вариант
  // var actor = $('.actor');
  // var legend = $('#legend').prop('checked');
  //
  // actor.click(function () {
  //   if (legend = true) {
  //     $(this).toggleClass('checked');
  //     $('.actor').not(this).toggleClass('no-checked-actor')
  //     $(this).children('.hover').toggleClass('hide-hiver');
  //     $(this).children('.legenda').toggleClass('show-legenda');
  //     $(this).parent().toggleClass('bg-checked');
  //
  //   } else {
  //     // $(this).parent().find('>.actor').removeClass('checked');
  //     // $(this).addClass('checked');
  //     // $('.checked .hover').removeClass('hide');
  //   }
  // });



  // $('.our-team .actor').click(function () {
  //   if ($(this).hasClass('active') == true) {
  //       $(this).toggleClass('active');
  //   } else {
  //     $(this).parent().find('>.actor').removeClass('active');
  //     $(this).addClass('active');
  //   }
  //
  // });

  // $('.actor').click(function () {
  //   if ($(this).hasClass('active')) {
  //       $(this).addClass('active');
  //       $(this).children('.hover').hide();
  //       $(this).children('.legenda').css('opacity', '1');
  //
  //   } else {
  //       $(this).parent().find('>.actor').removeClass('active');
  //       $(this).addClass('active');
  //       $('.actor').children('.hover').show();
  //       $('.actor').children('.legenda').css('opacity', '0');
  //
  //       // $('.actor .hover').show();
  //   }
  // });



  // var bottonActor = $('.actor');
  // var popupActor = $('.actor-popup');
  // // var i = bottonActor.length;
  // var checkActor = $('input[name="legend"]:checked');
  // console.log(checkActor);
  //   for (var i = 0; i < bottonActor.length; i++) {
  //     bottonActor[i].addEventListener('click', function () {
  //       popupActor.toggleClass('expanded');
  //       bottonActor.toggleClass('full');
  //     });
  //   };



  // $('.actor').click(function () {
  //   if (checkActor = true) {
  //     console.log('hi');
  //     $('.actor-popup').toggleClass('show-popup');
  //   };
  // });
  // $('.actor-check').click(function () {
  //   if (checkActor = true) {
  //         console.log('hi');
  //         $('.actor-popup').toggleClass('show-popup');
  //       };
  // });



  // console.log(checkActor[2]);
  // var addActor = $('.actor-popup').addClass('.show-popup');
  // var hasActor =  $('.actor-popup').hasClass('.show-popup');
  // console.log(addActor);

  // $('.actor').click(function () {
  //   if (checkActor = true) {
  //     // console.log('hi');
  //     $('.actor-popup').toggleClass('show-popup');
  //   };
  // });

  // $('.actor').on('mouseover', function () {
  //   $('.actor').removeClass('show-actor');
  //   $('.actor-popup').fadeIn('fast').addClass('show-popup');
  // });
  // $('.actor-popup').on('mouseout', function () {
  //   $('.actor-popup').removeClass('show-popup').fadeOut('fast');
  //   $('.actor').addClass('show-actor');
  //
  // });

// =============================

  // Анимация
  $(window).scroll( function (e) {

    // Классы
    var aboutEl = $('.about');
    var $animAbout = $('.about a');
    var geoEl = $('.geolocation');
    var $animTimetable = $('.timetable');
    var sityEl = $('.bg-block-4');
    var robotEl = $('.parallax-robot');
    // Неизменны
    var $winTop = $(this).scrollTop();
    var $winHeight = $(this).height();
    var $winBottom = ($winTop + $winHeight);
    // console.log($winTop);
    // console.log($winHeight);

    // Подстановки классов
      // Класс .about
      var $elAbout = $animAbout.offset().top;
      var $posAbout = ($elAbout - $winHeight / 1.2);
      if ($winTop > $posAbout) {
        $animAbout.addClass('anim-blur');
      };
      // Класс .timetable
      $animTimetable.each(function(i) {
        var $elTimetable = $animTimetable.offset().top;
        var $posTimetable = ($elTimetable - $winHeight / 1.2);
        if ($winTop > $posTimetable) {
          setTimeout(function () {
            $animTimetable.eq(i).addClass('anim-bottom');
          }, 200 * (i+1));
        };
      });

  // Паралакс
    var aboutHeight = aboutEl.height();
    var $aboutOutWin = (aboutHeight + $winHeight);
    if ($winTop <= $aboutOutWin) {
      aboutEl.css('transform', 'translate3d(0px, -'+ $winTop /30 +'%, 0px)');
    };

    var geoHeight = geoEl.height();
    var $geoOutWin = (geoHeight + $winHeight);
    if ($winTop <= (geoHeight + $geoOutWin)) {
      geoEl.css('transform', 'translate3d(0px, -'+ $winTop /15 +'%, 0px)');
    };

    var sityTop = sityEl.offset().top;
    var sityHeight = sityEl.height();
    if (sityTop <= $winBottom) {
      sityEl.css('transform', 'translate3d(0px, -'+ $winTop /100 +'%, 0px)');
    };

    var robotTop = robotEl.offset().top;
    var robotHeight = robotEl.height();
    // console.log(robotTop);
    // console.log($winBottom);
    if (robotTop <= $winBottom) {
      robotEl.css('transform', 'translate3d(0px, '+ $winTop /50 +'%, 0px)');
    };

    //Отключаем hover при прокрутки (оптимизация)
    // var body = $(document.body),timer;
    // clearTimeout(timer);
    // if(!body.hasClass('disable-hover')) {
    //   body.addClass('disable-hover');
    // }
    // timer = setTimeout(function(){
    //   body.removeClass('disable-hover')
    // }, 500);

  });

// =============================

  // Загрузчик
    $('.preloader').delay(600).fadeOut('fast');

// =============================
});




// var body = document.body,timer;
//
// window.addEventListener('scroll', function() {
//   clearTimeout(timer);
//   if(!body.classList.contains('disable-hover')) {
//     body.classList.add('disable-hover')
//   }
//
//   timer = setTimeout(function(){
//     body.classList.remove('disable-hover')
//   },300);
// }, false);
