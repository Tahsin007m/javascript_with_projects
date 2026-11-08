// date objects = objects that contain values that represent data and times
//                these date objects can be changed and formatted

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const miliseconds = date.getMilliseconds();

console.log(date);

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(miliseconds);

// ORDER FOR CUSTOM 
// DATE(YEAR, MOMTH, DAY, HOUR, MINUTE, SECOND, ms)

const dt = new Date(2019, 0, 17, 3, 4, 5);

console.log(dt);

