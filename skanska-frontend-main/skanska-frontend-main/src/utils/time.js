const toMinutes = (timeString) => {
  const t = timeString.split(':');
  return parseInt(t[0])*60 + parseInt(t[1]);
}
const toTimeString = (minutes) => {
  let hours = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }
  if (minutes === 0) minutes = '00';
  if (hours < 10) hours = '0' + hours.toString();
  return hours + ':' + minutes;
}

export { toMinutes, toTimeString };