
"use strict";
const $ = document.querySelector.bind(document);

const quiz = $(".quiz_q");
let count = 0;
let score = 0;
const questions = $(".quiz_answer");


function showTitle(count){

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
    const result = $(".result")
    const selectAll = questions.querySelectorAll(".option");
    const option = $(".option")
    if(selectedAnswer == trueAnswer){
        score++;
        count +=1;
        selectAll.forEach(item => item.classList.add("true"))
        showTitle(count);
    }
    else{
        count++;
        selectAll.forEach(item => item.classList.add("true"))
        showTitle(count);
    }
    
    if(count+1 == quiz_questions.length  && option.classList.contains("true")){
        const q = $(".quiz_answer")
        q.classList.add('hidden')
        quiz.classList.add('hidden')
        result.classList.remove('hidden')
        result.innerHTML = `Score ${score}`
        return;
    } 

}
console.log(count);



showTitle(count);

