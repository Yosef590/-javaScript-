class Vehicle  {
    constructor(Name , ID , company){
        this.Name=Name;
        this.ID = ID;
        this.compaye = company;
        
    }
}

class Car extends Vehicle{
  TypeCar;
}

class Airplane extends Vehicle{
TypeAirplane;
}

class Employee {
    constructor(Name_e,ID_e,DateOfBirth){
        this.Name_e=Name_e;
        this.DateOfBirth=DateOfBirth;
        this.ID_e=ID_e;

    }
    
}

class Driver extends  Employee{
    licenseID;
}
class Pilot extends Employee{
    licenseID;
}

class Booking {
    constructor(reservationDate,employeeId,vehiclesId,reservationID){
    this.reservationDate =reservationDate;
    this.employeeId =employeeId;
    this.vehiclesId =vehiclesId;
    this.reservationID =reservationID;
    }
}

const car1 = new Car('A',101,'T');
const car2 = new Car('B',102,'T');
const car3 = new Car('C',103,'T');

const Airplane1 =new Airplane('E',201,'O');
const Airplane2 =new Airplane('G',202,'O');


console.log(car1);