const arr = [
  "aa",
  10,
  "10",
  { a: 10, b: 10, c: [10, { a: [10, "10"] }] },
  [10, "qw"],
];

let sum = 0;
let demo = [];

const typeNumber = (item) => {
  console.log(item, "  number   ");
  sum = sum + item;
};
const typeString = (item) => {
  console.log(item, "   string   ");
  const temp = Number(item);
  console.log(temp, "_*_*_*_*_*_*_*_*_*_*_");
};
const typeObject = (item) => {
  console.log(item, "   object   ");
};
const typeArray = (item) => {
  console.log(item, "   Array   ");
};

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     typeNumber(arr[i]);
//   } else if (typeof arr[i] === "string") {
//     typeString(arr[i]);
//   } else if (arr[i].length !== undefined) {
//     typeArray(arr[i]);
//   } else {
//     typeObject(arr[i]);
//   }
// }

let temp = Number("ass");
console.log(temp, typeof temp);

if (!temp) {
  console.log("yes -------------------");
}
