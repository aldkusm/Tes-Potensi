const EXAM_CODE = "DITERIMAKERJA2026";

let participantName = "";
let currentQuestion = 0;
let answers = [];
let timerInterval;

const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener(
"click",
startExam
);

function startExam(){

participantName =
document.getElementById("nameInput")
.value.trim();

const code =
document.getElementById("examCodeInput")
.value.trim();

if(participantName === ""){

document.getElementById("errorText")
.innerText =
"Masukkan nama.";

return;
}

if(code !== EXAM_CODE){

document.getElementById("errorText")
.innerText =
"Kode salah.";

return;
}

shuffleQuestions();

answers =
new Array(questions.length)
.fill(null);

document
.getElementById("participantName")
.innerText =
participantName;

document
.getElementById("loginPage")
.classList.add("hidden");

document
.getElementById("examPage")
.classList.remove("hidden");

createNavigation();
loadQuestion();

startTimer(60*60);
}

function shuffleQuestions(){
questions.sort(()=>Math.random()-0.5);
}

function createNavigation(){

const nav =
document.getElementById("navigation");

nav.innerHTML = "";

questions.forEach((q,index)=>{

const btn =
document.createElement("button");

btn.className = "navBtn";

btn.innerText = index+1;

btn.onclick = ()=>{

currentQuestion = index;
loadQuestion();

};

nav.appendChild(btn);

});

}

function loadQuestion(){

const q =
questions[currentQuestion];

document
.getElementById("category")
.innerText =
q.category;

document
.getElementById("questionText")
.innerText =
`${currentQuestion+1}. ${q.question}`;

let html = "";

q.options.forEach((opt,index)=>{

html += `
<label class="option">

<input
type="radio"
name="answer"
value="${index}"
${answers[currentQuestion]===index?"checked":""}
>

${opt}

</label>
`;

});

document
.getElementById("optionsContainer")
.innerHTML = html;

document
.querySelectorAll(
'input[name="answer"]'
)
.forEach(el=>{

el.addEventListener(
"change",
e=>{

answers[currentQuestion] =
parseInt(e.target.value);

updateNavigation();

}
);

});

updateNavigation();

}

function updateNavigation(){

const btns =
document.querySelectorAll(".navBtn");

let answered = 0;

btns.forEach((btn,index)=>{

btn.className = "navBtn";

if(index===currentQuestion)
btn.classList.add("active");

if(answers[index]!==null){

btn.classList.add("answered");
answered++;

}

});

document
.getElementById("progressText")
.innerText =
`${answered}/${questions.length} Terjawab`;

}

document
.getElementById("nextBtn")
.onclick = ()=>{

if(currentQuestion <
questions.length-1){

currentQuestion++;
loadQuestion();

}

};

document
.getElementById("prevBtn")
.onclick = ()=>{

if(currentQuestion > 0){

currentQuestion--;
loadQuestion();

}

};

document
.getElementById("submitBtn")
.onclick = ()=>{

if(confirm(
"Yakin ingin menyelesaikan tes?"
)){

submitExam();

}

};

function startTimer(seconds){

let time = seconds;

timerInterval =
setInterval(()=>{

const m =
Math.floor(time/60);

const s =
time%60;

document
.getElementById("timer")
.innerText =
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

time--;

if(time<0){

submitExam();

}

},1000);

}

function submitExam(){

clearInterval(timerInterval);

let correct = 0;

questions.forEach((q,index)=>{

if(answers[index]===q.answer)
correct++;

});

const score =
Math.round(
(correct/questions.length)*100
);

let category =
"Perlu Latihan";

if(score>=90)
category="Sangat Tinggi";
else if(score>=80)
category="Tinggi";
else if(score>=70)
category="Baik";
else if(score>=60)
category="Cukup";

document
.getElementById("examPage")
.classList.add("hidden");

document
.getElementById("resultPage")
.classList.remove("hidden");

document
.getElementById("resultName")
.innerText =
participantName;

document
.getElementById("scoreNumber")
.innerText =
`${score}/100`;

document
.getElementById("scoreCategory")
.innerText =
category;

document
.getElementById("summaryText")
.innerText =
`Benar ${correct} | Salah ${questions.length-correct}`;

let review = "";

questions.forEach((q,index)=>{

const userAnswer =
answers[index] !== null
? q.options[answers[index]]
: "Tidak Dijawab";

const status =
answers[index]===q.answer
? "correct"
: "wrong";

review += `
<div class="reviewItem">

<h3>${index+1}. ${q.question}</h3>

<p>Jawaban Anda:
<span class="${status}">
${userAnswer}
</span>
</p>

<p>Jawaban Benar:
${q.options[q.answer]}
</p>

<p>${q.explanation}</p>

</div>
`;

});

document
.getElementById("reviewContainer")
.innerHTML = review;

}