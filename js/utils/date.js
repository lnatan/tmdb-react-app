const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth(); // Be careful! January is 0 not 1
const year = currentDate.getFullYear();

const dateString = year + "-" + (month + 1) + "-" + date;
const dateToTimestamp = date => new Date(date).getTime();

export { dateString, dateToTimestamp };