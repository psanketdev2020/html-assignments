
// hide-show
$(function () {

  $('.hide-btn').click(function () {
    $('.childDiv').hide(1000);
  });

  $('.show-btn').click(function () {
    $('.childDiv').show(1000);
  });

});

// fade
$(document).ready(function () {
    $(".fade-btn").click(function () {
        $(".box1").fadeIn();
        $(".box2").fadeIn("slow");
        $(".box3").fadeIn(3000);
    });

    $('.fade-out').click(function(){
      $('.box4').fadeOut();
      $('.box5').fadeOut('slow');
      $('.box6').fadeOut(3000);
    })

    $('.fade-toggle').click(function(){
      $('.box7').fadeToggle();
      $('.box8').fadeToggle('slow');
      $('.box9').fadeToggle(3000);
    })

    $('.fade-to').click(function(){
      $('.box10').fadeTo('slow', .15);
      $('.box11').fadeTo('slow', .4);
      $('.box12').fadeTo('slow', .75);
    })
});

// slide
$(document).ready(function () {
  $('.slide-main-1').click(function () {
    $('.slide-panel-1').slideDown();
  });

  $('.slide-main-2').click(function () {
    $('.slide-panel-2').slideUp();
  });

  $('.slide-main-3').click(function () {
    $('.slide-panel-3').slideToggle();
  });
});

// add class
$(function(){
  $('#addClass').click(function(){
    $(this).siblings().addClass('blue');
  }); 

  $('#removeClass').click(function(){
    $(this).siblings().removeClass('red');
  });

  $('#toggleClass').click(function(){
    $(this).siblings().toggleClass('green font-light');
  })
});


$(function(){

  // width-height
  $('.dimension-btn1').click(function(){
    const width = $('#div1').width();
    const height = $('#div1').height();
    let txt = '';
    txt += `width of div ${width} <br/>`;
    txt +=  `Height of div ${height}`;
    $('#div1').html(txt);
  });

  //innerWidth/innerHeight
  $('.dimension-btn2').click(function(){
    const width = $('#div2').width();
    const height = $('#div2').height();
    const innerWd = $('#div2').innerWidth();
    const innerHe = $('#div2').innerHeight();
    let txt = '';
    txt += `width of div ${width} <br/>`;
    txt +=  `Height of div ${height} <br/>`;
    txt += `innerWidth of div ${innerWd} <br/>`;
    txt +=  `innerHeight of div ${innerHe}`;
    $('#div2').html(txt); 
  });

  $('.dimension-btn3').click(function(){
    let txt = '';
    txt += `Width of div ` + $('#div3').width() + `<br>`;
    txt += `Height of div ` + $('#div3').height() + `<br>`;
    txt += `outerWidth of div ` + $('#div3').outerWidth() + `<br>`;
    txt += `outerHeight of div ` + $('#div3').outerHeight() + `<br>`;
    $('#div3').html(txt); 
  })

  $('.dimension-btn4').click(function(){
    let txt = '';
    txt += `Width of div ` + $('#div4').width() + `<br>`;
    txt += `Height of div ` + $('#div4').height() + `<br>`;
    txt += `outerWidth of div ` + $('#div4').outerWidth(true) + `<br>`;
    txt += `outerHeight of div ` + $('#div4').outerHeight(true) + `<br>`;
    $('#div4').html(txt); 
  })
});