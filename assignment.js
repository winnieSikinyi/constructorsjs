class Vehicle{
    constructor (make,model,year,isAvailable,toggleAvailability){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable =isAvailable;

    }

    toggleAvailability(){
        this.isAvailable = this.isAvailable;
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
    duration(){
        const oneDay = 4 * 60 
        const startDate = new Date(this.rentalStartDate);
        const endDate = new Date(this.rentalEndDate);

    }
}
let rentedCar = new Rental (`Nissan`,`Sunny`,2016,`True`,`false`
,`Alex`,`12/3/2023`,`12/4/2023`,`7/4/2023`);

console.log({rentedCar});


class Questions {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return expectedAnswer === this.correctAnswer;
    }
  }


  class Quiz extends Questions {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }
  let askedquestion = new Quiz (`WHERE`,`are you`)
  