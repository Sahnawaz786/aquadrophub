let newDate;
let arr = [];
let today = new Date();
let futureDate = new Date();

function getFutureDate(date, days) {
  newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}

const getArrayDate = (day) => {
  while (futureDate.getFullYear() != 2025) {
    arr.length == 0
      ? (futureDate = getFutureDate(today, day))
      : (futureDate = getFutureDate(futureDate, day));

    let days = futureDate.getDate();
    let month = futureDate.getMonth() + 1;
    if (futureDate.getMonth() < 10) {
      month = '0' + month;
    }
    if (futureDate.getDate() < 10) {
      days = '0' + days;
    }
    const realDate = days + '-' + month + '-' + futureDate.getFullYear();
    arr.push(realDate);
  }
  return arr;
};

export default getArrayDate;
