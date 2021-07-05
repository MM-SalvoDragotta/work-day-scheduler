var datetime = null;
date = null;

const currentHour = parseInt(moment().format("H"));
// const currentHour = 10;

const hourArray = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

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

//https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
function generateHour (length , start){
    for (var i=0 ; i<length ; i++){
        $(".container")
        .append(`
        <div class='row h-75 '> 
            <div id="${i+start}" class="ppf col-sm-2 border border-dark rounded text-center">${hourArray[i]} </div>
            <input id="${i+start}" data-hour="${hourArray[i].replace(/\s/g, '')}" class="ppf col-sm-8 border border-dark form-control form-control-lg" type="text" placeholder="Add Task">
            <div id="${i+start}" class="ppf col-sm-2 border border-dark rounded text-center"> <span class="btn"> Save </span> </div>
        </div>`);
    }      
}
 
function renderPastPresentFuture(){
    var selectAllHours = $(".ppf");

    //This will puch the past present future class to each row.
    $.each(selectAllHours, function (i, ppf) {
        var getId = parseInt($(this).attr("id"));
        // console.log(getId)
        if (getId === currentHour) {
        $(this).addClass("present");
        //   console.log(getId)
        } else if (getId < currentHour) {
        $(this).addClass("past");
        //   console.log(getId)
        } else if (getId > currentHour) {
        $(this).addClass("future");
        //   console.log(getId)
        }
    });
}

function renderLocalStorage(){
    var inputUserHours = document.getElementsByTagName('input');    

    for (var i=0; i< hourArray.length ; i++) {
        var localStorageValue = JSON.parse(localStorage.getItem(hourArray[i].replace(/\s/g, '')));
        inputUserHours[i].value = localStorageValue 
    }
}

function init() {    
    generateHour (10,8);
    renderPastPresentFuture()
    renderLocalStorage();     
}

// save event to save to localStorage 
  
init(); 

$(".btn").click(function(event){
    // console.log(event.target.parentElement.previousElementSibling);
    // console.log(event.target.parentElement.previousElementSibling.id)
    // console.log(event.target.parentElement.previousElementSibling.getAttribute("data-hour"))
    // console.log(event.target.parentElement.previousElementSibling.value);    
    // console.log(event.target.parentElement)
    // console.log(event.target.parentElement.id)
    var storageName = event.target.parentElement.previousElementSibling.getAttribute("data-hour");
    var storageValue = event.target.parentElement.previousElementSibling.value
    localStorage.setItem(storageName, JSON.stringify(storageValue));
});  



     
       
     
   
