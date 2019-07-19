import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Randomize = () => {
  return Math.floor(Math.random() * anecdotes.length)
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const emptyVotes = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)


const App = (props) => {


  const [votes, setVotes] = useState(emptyVotes)
  const [selected, setSelected] = useState(0)

  const newNumber = () => {
    setSelected(Randomize)
  }



  const upvote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const indexOfHighestValue = votes.indexOf(Math.max(...votes))


  return (
    <div>
      <div>
      <h1>Random anecdote</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text='upvote' onClick={upvote} />
      <Button text='another one' onClick={newNumber} />
      </div>
      <div>
      <h1>Anecdote with most upvotes</h1>
      {props.anecdotes[indexOfHighestValue]}
      </div>
    </div>
  )
}




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)