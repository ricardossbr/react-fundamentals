import React from 'react'


export default (props) => (
    <div>
        <div><strong>SON:</strong></div>
        <div>
            <span>{props.name} </span>
            <span><strong> {props.age}  </strong></span>
            <span>{props.nerd ? 'True' : 'False'}</span>
        </div>
        <button
            onClick={_  => props.onClick('Jose da silva', 60, false)}
        >
            Put some information about Father
        </button>
        
    </div>
)