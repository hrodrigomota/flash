function showAnswer() {
    let response = document.querySelector('#cardResponse')
    response.classList.toggle('blur')
}

function nextQuestion(nextQuestion) {
    let question = document.querySelector('#cardContainer')
    question.innerHTML = ''
    
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card', "animate__animated", "animate__backInRight")

    cardDiv.innerHTML = ` 
    <div class="cardQuestion center">
        <h1 class="cardTitle">O que é ${nextQuestion.title}</h1>
    </div>
    <div id="cardResponse" class="cardResponse blur">
        <p>
            ${nextQuestion.description}
        </p>
    </div>
    `
    question.appendChild(cardDiv)
}

function getInformation() {
    fetch('https://flash.quickstaart.com/random')
    .then((response) => {
        return response.json()
    })
    .then((responseJSON) => {
        nextQuestion(responseJSON)
    })
}

window.addEventListener('load', getInformation) // quando usar API para esperar resposta de servidor
