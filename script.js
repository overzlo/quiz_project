
"use strict";
const $ = document.querySelector.bind(document);

const quiz = $(".quiz_q");
let count = 0;
let score = 0;


function showTitle(count){
    const questions = $(".quiz_answer");

    quiz.innerHTML = `${quiz_questions[count].question}`;
    questions.innerHTML = ``;
    quiz_questions[count].options.forEach(
        item => 
        { 
            console.log(item)
        
            questions.insertAdjacentHTML('beforeend', `<li class ="option">${item}</li>`);
    })

    const selectAll = questions.querySelectorAll(".option");
    selectAll.forEach(item => item.setAttribute("onclick", "selectAnswer(this)"))
    

}
function selectAnswer(answer){
    const selectedAnswer = answer.textContent;
    const trueAnswer = quiz_questions[count].answer;

    if(selectedAnswer == trueAnswer){
        score++;
        alert("true");
        count++;
        showTitle(count);
    }
    else{
        alert("false")
    }

}
console.log(count);



showTitle(count);

