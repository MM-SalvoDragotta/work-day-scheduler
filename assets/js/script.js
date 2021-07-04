var datetime = null;
date = null;

//Show date and Time
var datetime_update = function() {
  date = moment(new Date());
  datetime.html(date.format('ddd [, ] Do MMMM YYYY HH:mm:ss'));
};

$(document).ready(function() {
  datetime = $('#currentDay');
  datetime_update();
  setInterval(datetime_update, 1000);
});

const hour = moment().format('H');


