import React from 'react'

import FamilyMember from './family-member'

export default (props) => {

    return (
        <div>
            <FamilyMember name="Pedro" {...props}/>
            <FamilyMember name="Ana" {...props}/>
            <FamilyMember name="Joana" {...props}/>
        </div>
    )
}