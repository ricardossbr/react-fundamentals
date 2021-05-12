import React from 'react';
import If from './if'

export default (props) => (
    <div>
        <If test={props.user}>
            Welcome <strong>{props.user}</strong>!
        </If>
    </div>
)