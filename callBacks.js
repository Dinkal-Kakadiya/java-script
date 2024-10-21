//   ****************** callBack *****************

// const sum = (num1, num2) => {
//   const temp = num1 + num2;
//   return temp;
// };

// const calculate = (val1, val2, callBack) => {
//   const ans = callBack(val1, val2);
//   console.log(ans);
// };

// // calculate(10, 20, sum);

// setTimeout(() => {
//   calculate(20, 30, sum);
// }, 3000);

// ********* callBack With setTimeOut ************

// const dataBase = (id) => {
//   setTimeout(() => {
//     console.log(id, "data");
//   }, 3000);
// };

// dataBase(27);
// dataBase(23);

// (.2)

const dataBase = (id, callback) => {
  setTimeout(() => {
    console.log(id, "data");
    callback && callback(id);
  }, 3000);
};

//  It's called callBack hell

dataBase(27, () => {
  dataBase(23, () => {
    dataBase(25, () => {
      dataBase(20);
    });
  });
});
