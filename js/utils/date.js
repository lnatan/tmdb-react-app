const currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Cause January is 0 not 1
let year = currentDate.getFullYear();

if (month < 10) {
  month = '0' + month;
}

if (day < 10) {
  day = '0' + day;
}

const dateString = year + "-" + month + "-" + day;
// const dateToTimestamp = date => new Date(date).getTime();

export { dateString };