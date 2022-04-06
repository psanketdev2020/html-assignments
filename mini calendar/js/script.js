console.log('jquery mini calendar');

$(function(){
  const date = new Date();
  const language = navigator.language;

  $('#day').text(date.toLocaleString(language, {weekday: 'long'}));
  $('#month').text(date.toLocaleString(language, {month: 'long'}));
  let currnetDate = date.getDate();
  if(currnetDate < 10) {
    $('#date').text(`0${currnetDate}`);
  }else {
    $('#date').text(`${currnetDate}`);
  }
  $('#year').text(date.getFullYear());

})