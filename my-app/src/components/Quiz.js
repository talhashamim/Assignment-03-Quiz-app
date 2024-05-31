import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
const Quiz = () => {

const [currentQuestion,setcurrentQuestion] = useState(0)
  // const [score,setScore] = useState(0)
  // const [clickedOption,setClickedOption] = useState(0)

const updateState = () =>{
// const [currentQuestion,setcurrentQuestion] = useState(0)
   if(currentQuestion < QuizData.length-1){
    setcurrentQuestion(currentQuestion + 1);
   }
}
// const optionbtn () => {
//     clickedOption
//     setClickedOption
// }


  return (
    <div>
      <p className='heading-txt'>QUIZ APP</p>
        <div className='container'>

            <div className='question'>
                <sapn id="question-number">{currentQuestion+1}</sapn>
                <sapn id="question-txt">{QuizData[currentQuestion].question}</sapn>
            </div>

            <div className='option-container'>
              {
                QuizData[currentQuestion].options.map((option, i)=>{
                 return <button className='option-btn'>{option}</button>
                })
              }
            </div>

            <input onClick={updateState} type='button' value="next" id='next-button'/>

        </div>
    </div>
  )
}

export default Quiz
