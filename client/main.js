const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const triviaBtn = document.getElementById('triviaSubmit')





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

// const getTrivia = () => {
//     let amount = document.getElementById('numberOfQuestions')
//     console.log(amount)
//     let difficulty = document.getElementById('difficulty')
    // axios.get(`https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=boolean`)
    // .then(res => {
    //     const data = res.data;
    //     alert(data);
    // })
//};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
// triviaBtn.addEventListener('click', getTrivia)