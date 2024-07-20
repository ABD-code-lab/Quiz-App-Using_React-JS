import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../Assets/data.js'

const Quiz = () => {

    let [no, setno] = useState(1)
    let [index, setindex] = useState(0)
    let [question, setquestion] = useState(data[index])
    let [lock, setlock] = useState(false)
    let [score, setscore] = useState(0)
    const [result, setresult] = useState(false)

    let next = ()=> {
      if(lock === true){
        if(index === data.length) {
          setresult(true);
          return 0;
        }
        setindex(++index);
        setquestion(data[index]);
        setlock(false);
        optionArray.map((option)=> {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        })
      }
      else {
        alert("Choose at least 1 option! ")
      }
    }

    let previous = ()=> {
      if(index >= 0){
        if(index === data.length) {
          // setresult(true);
          return 0;
        }
        setindex(--index);
        setquestion(data[index]);
        // setlock(false);
        optionArray.map((option)=> {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        })
      }
    }

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let optionArray = [option1, option2, option3, option4];

    const checkAns = (e, ans)=> {
      if(lock === false){
        if(question.ans === ans) {
          e.target.classList.add("correct");
          setlock(true);
          setscore(score+1);
      }
        else {
          e.target.classList.add("wrong");
          setlock(true);
          optionArray[question.ans-1].current.classList.add("correct");
      }
      }
    }

  return (
    <div className='main'>
        <h1>Quiz App</h1>
        <hr></hr>
        {result?<></>:<>
          <h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={option1} onClick={(e) => {checkAns(e, 1)}}>{no}. {question.option1}</li>
            <li ref={option2} onClick={(e) => {checkAns(e, 2)}}>{no + 1}. {question.option2}</li>
            <li ref={option3} onClick={(e) => {checkAns(e, 3)}}>{no + 2}. {question.option3}</li>
            <li ref={option4} onClick={(e) => {checkAns(e, 4)}}>{no + 3}. {question.option4}</li>
        </ul>
        <div className='btn'>
          <button onClick={previous}>previous</button>
          <button onClick={next}>Next</button>
        </div>
        <div className='index'>
            {index+1} of {data.length} questions
        </div>
        </>}
    </div>
  )
}

export default Quiz


// PK73NBPA040100301791732