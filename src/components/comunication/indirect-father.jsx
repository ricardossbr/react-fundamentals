import React, {useState} from 'react'

import IndirectSon from './indirect-son'
import If from '../conditional/if'

export default () => {
    
    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);

    const setFather = (name, age, nerd) => {
        setName(name);
        setAge(age);
        setNerd(nerd);
        console.log()
    }

    return (
        <div>
            <If test={age > 0 } >
                <div><strong>FATHER:</strong></div>
                <div>
                    <span>{name} </span>
                    <span><strong> {age}  </strong></span>
                    <span>{nerd ? 'True' : 'False'}</span>
                </div>
            </If>
            
            <IndirectSon name="Lucas" age={17} nerd={true} onClick={setFather}/>
        </div>
    )



}