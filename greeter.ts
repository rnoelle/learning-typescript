interface Person {
  firstName: string;
  lastName: string;
}
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial,
    public lastName) {
      this.fullName = firstName + " " + middleInitial
        + " " + lastName;
    }
}

function greeter(person: Person) {
  return "You're cool," + person.firstName + " "
    + person.lastName;
}

var user = new Student("Jane", "M", "Schuester");

document.body.innerHTML = greeter(user);
