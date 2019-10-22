import React from 'react'
const Filter = (props) => {

return <div>
        filter shown with <input value={props.condition}
            onChange={props.handle}
          />
      </div>
}
export default Filter