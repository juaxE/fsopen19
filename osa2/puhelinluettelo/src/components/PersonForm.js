import React from 'react'
const PersonForm = (props) => {
const name = props.name
const number = props.number

return <form onSubmit={props.submit}>
<div>
  name: <input value={name}
    onChange={props.nameHandle}
  />
</div>
<div>
  number: <input value={number}
    onChange={props.numberHandle}
  />
</div>
<div>
  <button type="submit">add</button>
</div>
</form>
}
export default PersonForm