//

var questions = [
    {
        question: 'How many continents are there in the world?' ,
        choiceA: 4,
        choiceB: 7,
        choiceC: 8,
        correct: 'B'
    },
    {
        question:'How many holes are there in a full round of golf?' ,
        choiceA: 12,
        choiceB: 18,
        choiceC: 9,
        correct: 'B'
    },
    {
        question: 'Which state is called the Golden State?',
        choiceA: 'California',
        choiceB: 'Colorado',
        choiceC: 'Florida',
        correct: 'A'
    }
];
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 15;
var score = 0;
var TIMER ;
var correctScore = 0;
var wrongScore = 0;

$("#start").on('click',function(){
    $('.start').css('display','none');
   
    $('#trivia').css('display','block');
    TIMER = setInterval(renderCounter,1000);
    renderQuestion();
      
})


function renderQuestion(){
    var q = questions[runningQuestion];
    $('#question').html(`<p>${q.question}</p>`);
    $('#A').html(q.choiceA);
    $('#B').html(q.choiceB);
    $('#C').html(q.choiceC);
}




function renderCounter(){
    if( count >= 0 ){
        $('#count').html(count);
        count--;
    }else{
        count = 15;  
        nextQuestion();
    }
}

function checkAnswer(answer){
    if ( answer == questions[runningQuestion].correct){
        answerIsCorrect();
        correctScore++;
    }else{
        answerIsWrong();
        wrongScore++;
    }
}
function answerIsCorrect(){
    $('#trivia').css('display','none');
    $('#message').html('<div id ="correct-answer"> correct </div>');
    setTimeout(()=>$('#correct-answer').css('display','none'),3000);  
    setTimeout(nextQuestion,3000)
}

function answerIsWrong(){
    $('#trivia').css('display','none');
    $('#message').html(`<div class ="wrong-answer"> wrong </div> <div class="wrong-answer"> The correct answer is ${questions[runningQuestion].correct}</div>`);
    setTimeout(()=>$('.wrong-answer').css('display','none'),3000);
    setTimeout(nextQuestion,3000);
}

