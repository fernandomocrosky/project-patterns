const personPrototype = {
  firstName: "Fernando",
  lastName: "Mocrosky",
  age: 30,

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullname());
