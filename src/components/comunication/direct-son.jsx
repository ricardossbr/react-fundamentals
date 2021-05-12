
import React from 'react'


export default (props) => (
    <div>
        <span>{props.name} </span>
        <span><strong> {props.age}  </strong></span>
        <span>{props.nerd ? 'True' : 'False'}</span>
    </div>
)