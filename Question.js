class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("๐โ๐งพMy Quiz๐งพโ ๐Game๐");
    this.title.position(200, 0);

    this.question.html("Question:- What starts and ends with the letter โEโ, but has only one letter? " );
  
    this.question.position(190, 80);
    this.option1.html("1: Everyone   ๐" );
    this.option1.position(190, 100);
    this.option2.html("2: Envelope      ๐ค"  );
    this.option2.position(190, 120);
    this.option3.html("3: Estimate   ๐ " );
    this.option3.position(190, 140);
    this.option4.html("4: Example   ๐" );
    this.option4.position(190, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("โค๐๐๐งพThank You, Your Answer Has Been Submitted๐งพ๐๐โค");
      this.message.position(150, 350);

     

    });
  }
}
