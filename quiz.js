let falseBtn = document.getElementsByClassName('quiz_answer-false')[0],
rightBtn = document.getElementsByClassName('quiz_answer-right')[0];
const counter = document.getElementsByClassName('quiz_counter')[0];

falseBtn.addEventListener("click", counterReduce);
rightBtn.addEventListener("click", counterAdd);

const questionList = [
    {
        text      : 'текст вопроса 1',
        answerList: [
            {
                text     : 'текст ответа 1',
                isCorrect: true,
            },
            {
                text     : 'текст ответа 2',
                isCorrect: false,
            },
						{
                text     : 'текст ответа 3',
                isCorrect: false,
            },
        ],
    },
    {
        text      : 'текст вопроса 2',
        answerList: [
            {
                text     : 'текст ответа 1',
                isCorrect: true,
            },
            {
                text     : 'текст ответа 2',
                isCorrect: false,
            },
        ],
    },
]



init()

function counterAdd () {
	counter.value++
}

function counterReduce () {
	counter.value--
}

function init () {
  const question         = questionList[0],
        $questionText    = document.getElementsByClassName('quiz_question')[0],
        $quiz_answerList = document.getElementsByClassName('quiz_answerList')[0]

				$questionText.innerHTML    = question.text
    $quiz_answerList.innerHTML = generateAnswerListHtml(question.answerList)


				setBtnListeners()

    $questionText.innerHTML = question.text

		function generateAnswerListHtml (answerList) {
		let answers = ''

		answerList.forEach(
			answer => {
				if (answer.isCorrect) {
					answers += `<button class="quiz_answer quiz_answer-right">${answer.text}</button>`
				} else {
					answers += `<button class="quiz_answer quiz_answer-false">${answer.text}</button>`
				}
			}
		)

		return answers
	}

 $quiz_answerList.innerHTML = generateAnswerListHtml(question.answerList)

 function setBtnListeners () {
	 const $falseBtn = document.getElementsByClassName('quiz_answer-false'),
				 $rightBtn = document.getElementsByClassName('quiz_answer-right')

	 for (let i = 0; i < $falseBtn.length; i++) {
			 $falseBtn[i].addEventListener('click', counterReduce);
	 }

	 for (let i = 0; i < $rightBtn.length; i++) {
			 $rightBtn[i].addEventListener('click', counterAdd);
	 }
}
}
