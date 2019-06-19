import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad, total, average, positive }) => {

  if (total === 0) {
    return <p>No feedback given</p>
  }


  return <table>
    <tbody>
    <Statistic text='good' value={good} />
    <Statistic text='neutral' value={neutral} />
    <Statistic text='bad' value={bad} />
    <Statistic text='all' value={total} />
    <Statistic text='average' value={average} />
    <Statistic text='positive' value={positive} />
    </tbody>
  </table>
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


  let average = ((good - bad) / total).toFixed(2)

  let positive = (good / total * 100).toFixed(2) + '%'

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

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)



const Statistic = props => <tr><th>{props.text}</th><th>{props.value}</th></tr>

ReactDOM.render(<App />,
  document.getElementById('root')
)