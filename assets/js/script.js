var datetime = null;
date = null;

//Show date and Time
var datetime_update = function() {
  date = moment(new Date());
  datetime.html(date.format('ddd [, ] Do MMMM YYYY hh:mm:ss A'));
};

$(document).ready(function() {
  datetime = $('#currentDay');
  datetime_update();
  setInterval(datetime_update, 1000);
});

// const currentHour = parseInt(moment().format("H"));

const currentHour = 10;

const hourArray = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

function generateHour (length , start){
    for (var i=0 ; i<length ; i++){
        $(".container")
        .append(`
        <div class='row h-75 '> 
            <div id="${i+start}" class="ppf col-sm-2 border border-dark rounded text-center">${hourArray[i]} </div>
            <input id="${i+start}" data-name="${"localStorage"}${i+start}" class="ppf col-sm-8 border border-dark form-control form-control-lg" type="text" placeholder=".form-control-lg">
            <div id="${i+start}" class="ppf col-sm-2 border border-dark rounded text-center"> <span id="btn"> Save </span> </div>
        </div>`);
    }      
}
 
generateHour (10,8);



var selectAllHours = $(".ppf");
    
$.each(selectAllHours, function (i, ppf) {
    var getId = parseInt($(this).attr("id"));
    // console.log(getId)
    if (getId === currentHour) {
      $(this).next().addClass("present");
    //   console.log(getId)
    } else if (getId < currentHour) {
      $(this).next().addClass("past");
    //   console.log(getId)
    } else if (getId > currentHour) {
      $(this).next().addClass("future");
    //   console.log(getId)
    }
  });    
       
     
     
       
  

     
       
     
   
