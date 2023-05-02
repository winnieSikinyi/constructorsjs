class Vehicle{
    constructor (make,model,year,isAvailable,toggleAvailability){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable =isAvailable;
        this.toggleAvailability= toggleAvailability

    }
}
let vehicle = new Vehicle (`Toyota`,`Camry`,2020,`True`,`false`);
console.log({vehicle});

class Rental extends Vehicle{
    constructor(make,model,year,isAvailable,
        toggleAvailability,rentname,rentStartDate,rentendDate,rentDue){
        super(make,model,year,isAvailable,toggleAvailability);
        this.rentname = rentname;
        this.rentStartDate = rentStartDate;
        this.rentendDate = rentendDate;
        this.rentDue = rentDue;
    }
}
let rentedCar = new Rental (`Nissan`,`Sunny`,2016,`True`,`false`
,`Alex`,`12.3.2023`,`12.4.2023`,`7.4.2023`);

console.log({rentedCar});

class Questions{
    constructor(text,options,correctAnswers){
        this.text = text;
        this.options = options;
        this.correctAnswers = correctAnswers;
    }
    checkAnswer(){
        console.log(`correct`);
    }
}
let questions = new Questions (`How are you today`,`it is there`,`it is not there`,`yes`);
console.log({Questions});
Questions(questions)

class Quiz extends Questions (){
    constructor(text,options,correctAnswers ){
        super(text,options,correctAnswers)

    }

}