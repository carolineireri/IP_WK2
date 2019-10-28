function akanName() {
  var femaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleArray = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  // array for days of the week
  var daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var dd = parseInt(document.getElementById("dd").value);
  var mm = parseInt(document.getElementById("mm").value);
  var yy = parseInt(document.getElementById("yy").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  if (mm < 1 || mm > 12 || (mm == 2 && mm > 29)) {
    alert("Please enter a valid month!");
  } else if (dd < 1 || dd > 31) {
    alert("Please enter a valid day!");
  }
  var dob = new Date(dd +"-"+ mm +"-"+ yy);
  var day=dob.getDay();

  if (female.checked == true) {
    alert("You were born on " + daysArray[day] + " and your akan name is " + femaleArray[day]);
  } else if (male.checked == true) {
    alert("You were born on " + daysArray[day] + " and your akan name is " + maleArray[day]);
  } else {
    alert("Error occured");
  }
}

