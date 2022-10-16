const numberForm=document.querySelector('#number-form');

const numberInput = document.getElementById("max_number");
const numberInput2 = document.getElementById("user_number");

const user_key="user_number";
const correct_key="correct_number";

const userNumberText = document.querySelector("#usernumber_text");
const correctNumberText = document.querySelector("#correctnumber_text");
const HIDDEN_CLASSNAME = 'hidden'; 

const hidden = document.querySelector(".hidden");
const judge = document.querySelector("#judgement");


function numberSubmit(event){
    event.preventDefault();
    const maxNumber = numberInput.value;
    const userNumber = numberInput2.value;
    const correctNumber = Math.ceil(Math.random() * maxNumber);

    localStorage.setItem(correct_key,correctNumber);
    localStorage.setItem(user_key,userNumber);

    paintNumbers(userNumber,correctNumber)
}



function paintNumbers(userNum,correctNum){
    const savedUserNum=localStorage.getItem(user_key);
    const savedCorrectNum=localStorage.getItem(correct_key);


    userNumberText.innerText=userNum;
    correctNumberText.innerText=correctNum;
    hidden.classList.remove(HIDDEN_CLASSNAME);

    if (savedUserNum===savedCorrectNum){
        judge.innerText="You Won!"
    }
    else{
        judge.innerText="You Lost!"
    }
}

numberForm.addEventListener('submit',numberSubmit);
// 
