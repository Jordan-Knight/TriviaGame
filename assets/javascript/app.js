var counter = 20;
var correct = 0;
var incorrect = 0;


var app = {
    q1 : {
        question : "question1",
        answers : ["1","2","3","4"],
        correctAnswer : 1,
    },
    q2 : {
        question : "question2",
        answers : ["1","2","3","4"],
        correctAnswer : 1,
    },
    q3 : {
        question : "question3",
        answers : ["1","2","3","4"],
        correctAnswer : 1,
    },
    q4 : {
        question : "question4",
        answers : ["1","2","3","4"],
        correctAnswer : 1,
    },
    q5 : {
        question : "question5",
        answers : ["1","2","3","4"],
        correctAnswer : 1,
    },
    startGame : function(){
        $("#start").on("click", function(){
            //all methods called here.

        })

    },
    timer : function(){
        setInterval(function(){
            counter --;

        }, 1000);

    },
    questionDisplay : function(){
        $("#question").html("<h2>" + this.question + "</h2>");
    },

}