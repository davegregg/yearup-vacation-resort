"use strict"

let extraPerDay = 0;

const tollTagSelected = document.getElementById("tollTag").checked;
if (tollTagSelected) {
    extraPerDay += 3.95;
}

const gpsSelected = document.getElementById("gps").checked;
if (gpsSelected) {
    extraPerDay += 4.95;
}

const roadsideSelected = document.getElementById("roadside").checked;
if (roadsideSelected) {
    extraPerDay += 2.95;
}

console.log(extraPerDay)



const autoRadioBtn = document.getElementById("auto");
const homeRadioBtn = document.getElementById("home");
let basePremium = 0;

if (autoRadioBtn.checked) {
    basePremium = 175.00;
} else if (homeRadioBtn.checked) {
    basePremium = 395.00;
} else { // it must be a life policy!
    basePremium = 225.00;
}

console.log(basePremium)