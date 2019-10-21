import React from 'react'




const Total = (props) => {
    
    const parts = props.parts
    console.log(parts)
   
    const count = parts.reduce(function(sum, part) {        
        return sum + part.exercises
    }, 0)

    return (
        <div>
            <p>total of {count} exercises</p>

        </div>
    )
}



export default Total