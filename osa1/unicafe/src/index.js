import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad, total, average, positive}) => {




  return <div>
    <Display text='good' value={good} />
    <Display text='neutral' value={neutral} />
    <Display text='bad' value={bad} />
    <Display text='all' value={total} />
    <Display text='average' value={average} />
    <Display text='positive' value={positive} />
  </div>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  let total = good + neutral + bad


  let average = (good - bad) / total


  let positive = good / total * 100 + '%'


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text='good' />
      <Button onClick={addNeutral} text='neutral' />
      <Button onClick={addBad} text='bad' />

      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}
       average={average} positive={positive} />
    </div>
    )
  }
  
const Button = ({onClick, text }) => (
  <button onClick={onClick}>
        {text}
      </button>
      )
      
      
      
const Display = props => <div>{props.text} {props.value}</div>

      ReactDOM.render(<App />,
        document.getElementById('root')
)