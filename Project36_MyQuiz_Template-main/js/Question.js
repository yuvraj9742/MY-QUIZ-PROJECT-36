class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2=createInput("enter the correct option")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createElement('h3')
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.option3=createElement('h4')
    this.option4=createElement('h4')



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide()
    this.input2.hide()
    this.option1.hide()
    this.option2.hide() 
    this.option3.hide()
    this.option4.hide()



  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html('what is the capital of your country')
    this.question.position(150,80)
    this.option1.html("1. west bengal")
    this.option1.position(150,100)
    this.option2.html("2.delhi")
    this.option2.position(150,120)
    this.option3.html("3. rajasthan")
    this.option3.position(150,140)
    this.option4.html("4. gujrat")
    this.option4.position(150,160)


    this.input1.position(150, 230);
    this.input2.position(350,230)
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html('thank you your answer has been submitted')
    this.message.position(350,350)
    })


  }
}
