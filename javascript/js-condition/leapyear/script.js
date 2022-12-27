let leapYear = 2020;
if (leapYear % 4 === 0 && leapYear % 400 === 0 || leapYear % 100 !== 0) {
    console.log("That's leap year");
} else {
    console.log("That's not leap year");
}