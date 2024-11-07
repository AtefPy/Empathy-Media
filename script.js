
var modal = document.getElementById("TheModal");
var btn = document.getElementById("Reservation");
var close = document.getElementsByClassName("Close")[0];
var confirm = document.getElementById("Confirm");
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
var yearnew = today.getFullYear()+1;

//Above we have declared all the different variables that are used in the script

btn.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  if(day<10){
    day='0'+day
  }
  if(month<10){
    month='0'+month
  }
  today = year + '-' + month + '-' + day;
  document.getElementById("Date").setAttribute("min", today);
  yearplus = yearnew + '-' + month + '-' + day;
  document.getElementById("Date").setAttribute("max", yearplus);

function myfunction1() {
  var firstname = document.getElementById("FName").innerHTML;
  if (document.getElementById("FName").innherHTML = null) {
    document.getElementById("FName").innherHTML = 'First Name';
  }
}
//Above is the function of the reservation Menu

  confirm.onclick = function() {
    var firstname = document.getElementById("FName").value;
    var surname = document.getElementById("Surname").value;
    var customers = document.getElementById("HMany").value;
    var bookingtime = document.getElementById("Time").value;
    var bookingdate = document.getElementById("Date").value;
    var mobile = document.getElementById("Mobile").value;
    var email = document.getElementById("Email").value;
    var summary = document.getElementById("summary").value;
    sum = firstname + ' ' + surname + ' You have booked ' + customers + ' seats at ' + bookingtime + ' on ' + bookingdate + ' Your confirmation Email has been sent to ' + email + ' along with one sent to ' + mobile;
    document.getElementById("summary").innerHTML = sum;
  }
