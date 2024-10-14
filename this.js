const perent = {
  name: "bharatbhai",
  surname: "pateliya",
  child: {
    cName: "Pratham",
    surname: "pateliya",
    fullName: function () {
      return this.name + " " + this.surname;
    },
  },
};

console.log(perent.child.fullName());
