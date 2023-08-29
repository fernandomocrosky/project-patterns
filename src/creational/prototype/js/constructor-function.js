function Person(name, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Fernando",
  lastName: "Mocrosky",
  age: 30,

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

const person1 = new Person("Fernando", "Mocrosky", 30);
console.log(person1.fullname());
