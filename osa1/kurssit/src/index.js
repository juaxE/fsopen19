import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header name={course} />
            <Content part1={part1} nr1={exercises1}
                part2={part2} nr2={exercises2}
                part3={part3} nr3={exercises3} />
            <Total one={exercises1} two={exercises2} three={exercises3} />
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