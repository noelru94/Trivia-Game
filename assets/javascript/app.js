//

var questions = [
    {
        question: 'How many continents are there in the world?' ,
        choiceA: 4,
        choiceB: 6,
        choiceC: 8,
        correct: 7
    },
    {
        question:'How many wholes are there in a full round of golf?' ,
        choiceA: 12,
        choiceB: 16,
        choiceC: 9,
        correct: 18
    },
    {
        question: 'Which state is called the Golden State?',
        choiceA: 'New Jersey',
        choiceB: 'Colorado',
        choiceC: 'Florida',
        correct: 'California'
    }
];
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;
var count = 15;


function renderQuestion(){
    var q = questions[runningQuestionIndex];
    $('#question').html('<p>'+q.question+'</p>');
    $('#A').html(q.choiceA);
    $('#B').html(q.choiceB);
    $('#C').html(q.choiceC);
}



$("#start").on('click',function(){
    $('.jumbotron').css('display','none');
    
    $('#trivia').css('display','block');
    renderQuestion();
})



    




