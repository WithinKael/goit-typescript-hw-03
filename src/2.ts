/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {
    this.salary += 10000;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
  }
}

const manager = new Manager("Alex", "Project Manager", 20000);

export {};

class Person {
  constructor(
    private name: string,
    private age: number,
    private gender: "male" | "female"
  ) {}

  public introduce() {
    return `Имя:${this.name}. Возраст:${this.age}, Пол:${this.gender}`;
  }
}

class Student extends Person {
  private studentId: number;

  constructor(
    name: string,
    age: number,
    gender: "male" | "female",
    studentId: number
  ) {
    super(name, age, gender);
    this.studentId = studentId;
  }

  study() {
    return `Я учусь в университете`;
  }
}

class Teacher extends Person {
  private subject: string;

  constructor(
    name: string,
    age: number,
    gender: "male" | "female",
    subject: string
  ) {
    super(name, age, gender);
    this.subject = subject;
  }

  teach() {
    return "Преподаю в университете";
  }
}
