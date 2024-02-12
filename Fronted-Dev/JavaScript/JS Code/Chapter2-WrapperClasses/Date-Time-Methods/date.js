
let d = new Date();

x = d.toLocaleString('default', {
  weekday: 'long',
  year:'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'IST',
});
console.log(x);