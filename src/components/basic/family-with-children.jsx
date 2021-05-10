import React from 'react'


export default (props) => {

    return (
        <div>
            {
                React.Children.map(props.children, child => React.cloneElement(child, props))
            }
        </div>
    )
}