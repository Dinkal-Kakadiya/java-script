function display() {
  console.log(1);
}

function ride(hello) {
  console.log(2);
  hello();
}

ride(display);
