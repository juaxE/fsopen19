import React from 'react'


const reducer = (s, p) => s + p
const count = props =>
props.reduce(reducer)

const Total = (props) => {

    
    return (
        <div>
            <p>total of {count(props)} exercises</p>

        </div>
    )
}



export default Total