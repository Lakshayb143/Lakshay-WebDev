let number = new Promise((resolve, reject) => {
  resolve(10);
});

number.then((num) => {
  num++;
  return num;
});
number.then((num) => {
  num = num + 10;
  return num;
});
number.then((num) => {
  num = num + 20;
  console.log(num);
  return num;
});

// The above code doesn't form a promise chaining.

// Promise chaining
number
.finally( ()=>{
    console.log("Stop loading...")
})
  .then((num) => {
    num++;
    return num;
  })
  .then((num) => {
    num = num + 10;
    return num;
  })
  .then((num) => {
    num = num + 20;
    console.log(num);
    return num;
  });

