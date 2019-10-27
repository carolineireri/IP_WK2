function akanName() {
    var femalearray= ["Akosua", "Aduoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var malearray= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var dd= parseInt(document.getElementById("dd").value);
    var mm=parseInt(document.getElementById("mm").value);
    var yy=parseInt(document.getElementById("yy").value);
    var cc = (yy - 1) / 100 + 1;
    // array for days of the week
    var daysarray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var dayofweek = (CC / 4 - 2 * CC - 1 + 5 * YY / 4 + (26 * (MM + 1) / 10) + DD) % 7;
    console.log(dayofweek);

    var gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);
    if (gender === "Female") {
        // console.log(arrayoffemale);
        // document.getElementById('demo').innerHTML = femalearray[Math.round(dayofweek)];

    } else {
        // console.log(arrayofmale);
        // document.getElementById('demo').innerHTML = malearray[Math.round(dayofweek)];


    }
}