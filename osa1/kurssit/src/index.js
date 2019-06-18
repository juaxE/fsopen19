import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


    return (
        <div>
            <Header name={course} />
            <Content part1={part1.name} nr1={part1.exercises}
                part2={part2.name} nr2={part2.exercises}
                part3={part3.name} nr3={part3.exercises} />
            <Total one={part1.exercises} two={part2.exercises} three={part3.exercises} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>

    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} nr={props.nr1} />
            <Part part={props.part2} nr={props.nr2} />
            <Part part={props.part3} nr={props.nr3} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.nr}</p>
        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p> Number of exercises {props.one + props.two + props.three} </p>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))