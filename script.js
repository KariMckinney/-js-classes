//Part1 
function Person(first, age) {
    this.name = first;
    this.age = age;
}

const person = new Person("Alice", 30);

document.getElementById("demo").innerHTML = (
    "Hello, I'm " + person.name + ". I'm " + person.age + " years old."
)
    


//Part2
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    
  }
  birthday() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const person1 = new Person1("Alice", 30);


