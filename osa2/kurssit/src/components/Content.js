import React from 'react'

const Content = (props) => {
    const {parts} = props

    const credits = () => parts.map((part, i) => <li key={i}>{parts[i].name}  {parts[i].exercises}</li>)
    
    return (
        <div>
            {credits()}
        </div>

    )

}



export default Content
