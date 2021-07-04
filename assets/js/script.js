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

const currentHour = parseInt(moment().format("H"));

var selectAllHours = $(".ppf");

$.each(selectAllHours, function (i, ppf) {
    var getId = parseInt($(this).attr("id"));
    console.log(getId)
    if (getId === currentHour) {
      $(this).next().addClass("present");
      console.log(getId)
    } else if (getId < currentHour) {
      $(this).next().addClass("past");
      console.log(getId)
    } else if (getId > currentHour) {
      $(this).next().addClass("future");
      console.log(getId)
    }
  });
  


// $(".container")
// .append(
//     $("<div class='row h-75'>") )
// $(".row")
// .append(
//     $("<div id='9'class='col-sm-2 border border-dark rounded'>")
// )
//     .append(
//         $("<div id='9'class='col-sm-2 border border-dark rounded'> 9AM </div>")
//         .append(
//             $("<input id='9'class='col-sm-8 border border-dark form-control form-control-lg' type='text' placeholder='.form-control-lg'></input> ")
//             .append(
//                 $("<div id='9' class='col-sm-2 border border-dark rounded'>Save </div>")
//                 .append(
//                     $("</div>")
//                 )

//             )
//         )
//     )
// )

// $(".eight").addClass("present")

/* <div class="row h-75">
<div class="time8am col-sm-2 border border-dark rounded">
  8AM
</div>
<input class="time8am col-sm-8 border border-dark form-control form-control-lg" type="text" placeholder=".form-control-lg">  
<!-- <textarea class="col-sm-8 border border-dark future" id="w3review" name="w3review" ></textarea>   -->            
<div id = "8" class="time8am col-sm-2 border border-dark rounded">
  Save
</div>
</div> */
