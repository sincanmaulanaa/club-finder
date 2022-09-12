document.addEventListener("DOMContentLoaded", main);

// Object Function
// function Profile(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// Profile.prototype.introMySelf = function () {
//   setTimeout(() => {
//     console.log(`Halo, nama aku ${this.name}, umur aku ${this.age}.`);
//     console.log(`Saya mempunyai hobby ${this.hobby}.`);
//   }, 1000);
// };

// const programmer = new Profile("Sincan Maulana", 19, ["Coding", "Swimming"]);

// programmer.introMySelf();

// Default Parameters
// function sayHello(name = "stranger", greet = "hello") {
//   console.log(`${greet}, ${name}`);
// }

// sayHello("Sincan");

// const sayHello = (name = "stranger", greet = "hello") =>
//   console.log(`${greet}, ${name}`);

// sayHello("sincan", "hai");

// Class ES6
// class Car {
//   constructor(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.engineIsActive = false;
//   }

//   startEngines() {
//     console.log("Mobil dinyalakan...");
//     this.engineIsActive = true;
//   }

//   info() {
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Color: ${this.color}`);
//     console.log(`Engines: ${this.engineIsActive ? "active" : "non-active"}`);
//   }
// }

// const sincanCar = new Car("Honda", "Black");
// sincanCar.startEngines();
// sincanCar.info();

// class Profile {
//   constructor(name, age, address, hobby, instagram) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.hobby = hobby;
//     this._instagram = instagram;
//     this.areYouProgrammer = false;
//     this.areYouStudent = false;
//   }

//   get instagram() {
//     return `Instagram : ${this._instagram}`;
//   }

//   set instagram(value) {
//     console.log(
//       `Username instagram diubah dari ${this._instagram} menjadi ${value}`
//     );
//     this._instagram = value;
//   }

//   myProfile() {
//     console.log(`My name is ${this.name}, I am ${this.age} years old.`);
//     console.log(`I live in ${this.address}`);
//     console.log(`My Hobby is ${this.hobby}`);
//   }

//   isProgrammer(programmer) {
//     this.areYouProgrammer = programmer;

//     console.log(
//       `${this.name} is ${
//         this.areYouProgrammer ? "Frontend Developer" : "not a Progammer"
//       }`
//     );
//   }

//   isStudent(student) {
//     this.areYouStudent = student;

//     console.log(
//       `${this.name} is ${this.areYouStudent ? "Student" : "not a Student"}`
//     );
//   }
// }

// const introMySelf = new Profile(
//   "Sincan Maulana",
//   19,
//   "Ponorogo, Indonesia",
//   ["Coding", "Swimming"],
//   "sincan.mln"
// );

// introMySelf.myProfile();
// introMySelf.isProgrammer(true);
// introMySelf.isStudent(true);
// console.log(introMySelf.instagram);

// introMySelf.instagram = "sincanmaulanaa";
// console.log(introMySelf.instagram);

// const friend = new Profile(
//   "Zainur Roziqin",
//   19,
//   "Magetan, Indonesia",
//   ["Pengajian", "Kondangan"],
//   "zainur.rq"
// );

// friend.myProfile();
// friend.isProgrammer(false);
// friend.isStudent(true);
// console.log(friend.instagram);

// friend.instagram = "zainur.roziqin";
// console.log(friend.instagram);

// class Vehicle {
//   constructor(licensePlate, manufacture) {
//     this.licensePlate = licensePlate;
//     this.manufacture = manufacture;
//     this.engineIsActive = false;
//   }

//   startEngines() {
//     console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
//     this.engineIsActive = true;
//   }

//   info() {
//     console.log(`Nomor kendaraan: ${this.licensePlate}`);
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Mesin: ${this.engineIsActive ? "Active" : "Inactive"}`);
//   }

//   parking() {
//     console.log(`Kendaraan dengan nomor ${this.licensePlate} parkir!`);
//   }
// }

// class LandVechicles extends Vehicle {
//   constructor(licensePlate, manufacture, wheels) {
//     super(licensePlate, manufacture);
//     this.wheels = wheels;
//   }

//   droveOff() {
//     console.log(`Kendaraan dengan nomor ${this.licensePlate} melaju!`);
//   }
// }

// class AirVehicles extends Vehicle {
//   constructor(licensePlate, manufacture) {
//     super(licensePlate, manufacture);
//   }

//   takeOff() {
//     console.log(`Kendaraan dengan nomor ${this.licensePlate} mendarat!`);
//   }
// }

// class Car extends LandVechicles {
//   constructor(licensePlate, manufacture, wheels) {
//     super(licensePlate, manufacture, wheels);
//   }

//   openDoor() {
//     console.log(`Membuka pintu!`);
//   }

//   // overriding method
//   info() {
//     super.info();
//     console.log(`Jumlah roda: ${this.wheels}`);
//   }
// }

// class MotorCycle extends LandVechicles {
//   constructor(licensePlate, manufacture) {
//     super(licensePlate, manufacture);
//   }

//   doWheelie() {
//     console.log(`Kendaraan dengan nomor ${this.licensePlate} ngetrill!`);
//   }
// }

// class Plane extends AirVehicles {
//   constructor(licensePlate, manufacture, wings) {
//     super(licensePlate, manufacture);
//     this.wings = wings;
//   }

//   turnOnJet() {
//     console.log(`Pesawat dengan nomor ${this.licensePlate} dinyalakan!`);
//   }
// }

// class Helicopter extends AirVehicles {
//   constructor(licensePlate, manufacture, blades) {
//     super(licensePlate, manufacture);
//     this.blades = blades;
//   }

//   lowFlying() {
//     console.log(`Helicopter sedang terbang rendah!`);
//   }

//   info() {
//     super.info();
//     console.log(`Helicopter ini memiliki ${this.blades} baling`);
//   }
// }

// class VehicleFactory {
//   static repair(vehicles) {
//     vehicles.forEach((vehicle) =>
//       console.log(
//         `Kendaraan dengan nomor ${vehicle.licensePlate} merek ${vehicle.manufacture} sedang melakukan perbaikan`
//       )
//     );
//   }
// }

// class VehicleWash {
//   static wash(vehicles) {
//     vehicles.forEach((vehicle) =>
//       console.log(`${vehicle.manufacture} sedang dicuci!`)
//     );
//   }
// }

// class VehicleServices {
//   static service(vehicles) {
//     vehicles.forEach((vehicle) =>
//       console.log(
//         `Kendaraan dengan nomor ${vehicle.licensePlate} sedang diservice!`
//       )
//     );
//   }
// }

// const myCar = new Car("AE 121 BT", "Honda", 4);
// myCar.startEngines();
// myCar.info();
// myCar.droveOff();

// const myMotorCycle = new MotorCycle("AE 9899 BH", "Yamaha MX");
// myMotorCycle.startEngines();
// myMotorCycle.info();
// myMotorCycle.doWheelie();

// const airAsia = new Plane("BG 88A AS", "Boeing", 2);
// airAsia.turnOnJet();
// airAsia.info();
// airAsia.parking();

// const myCopter = new Helicopter("BA 78HH SS", "Suzuki", 3);
// myCopter.startEngines();
// myCopter.info();
// myCopter.lowFlying();

// VehicleFactory.repair([myCar, airAsia]);
// VehicleWash.wash([myCopter, myMotorCycle]);
// VehicleServices.service([airAsia, myCar]);

// ASYNCHRONOUS (fungsi yang dieksekusi sesuai keinginan)
// console.log("selamat datang!");

// setTimeout(() => {
//   console.log("Terimakasih sudah mampir, silakan datang kembali!");
// }, 3000);

// console.log("ada yang bisa dibantu?");

// Callback Function
const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu...");

  setTimeout(() => {
    cake = "kue selesai dibuat!";
    callback(cake);
  }, 3000);
};

getCake((cake) => console.log(cake));

const getCoffe = (callback) => {
  let coffe = null;
  console.log("Kopi sedang dibuat, harap tunggu...");

  setTimeout(() => {
    coffe = "Kopi selesai dibuat!";
    callback(coffe);

    console.log(`Kopi dan kue siap dihidangkan!`);
  }, 5000);
};

getCoffe((coffe) => console.log(coffe));
