import React from 'react'
import students from '../../data/students'

export default () => (
    <div>
        <ul>
            {students.map(re => <li key={re.id}>{re.id} ) {re.name} - {re.score} </li>)}
        </ul>
    </div>
)