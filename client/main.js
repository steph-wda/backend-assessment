const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const triviaBtn = document.getElementById('triviaSubmit')
const triviaDiv = document.getElementById('triviaCard')
const answerSpan = document.getElementsByTagName('span')






const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const displayTrivia = (trivia) => {
    triviaDiv.innerHTML=''
    const showTrivia = document.createElement('p')
    const showAnswer = document.createElement('span')
    showAnswer.style.display='block'
    showAnswer.style.verticalAlign ='text-top'
    showTrivia.style.border='solid 1px black'
    showTrivia.style.width='400px'
    showTrivia.style.height='100px'
    showTrivia.style.textAlign='center'
    showAnswer.textContent = 'Show Answer'
    showAnswer.style.paddingTop='25px'
    showTrivia.textContent = trivia.question.replace(/&quot;/g, '\"')
    showTrivia.appendChild(showAnswer)
    triviaDiv.appendChild(showTrivia)
}




const getTrivia = (e) => {
    e.preventDefault()
    let difficulty = document.getElementById('difficulty').value
    axios.get(`https://opentdb.com/api.php?amount=1&category=18&difficulty=${difficulty}&type=boolean`)
    .then(res => {
        const data = res.data.results; //gets the results from the response
        displayTrivia(data[0])
})
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
triviaBtn.addEventListener('click', getTrivia)

//triviaAnswer.addEventListener('click', getTrivia)