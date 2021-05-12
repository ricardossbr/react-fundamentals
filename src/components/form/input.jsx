import './input.css';
import React, {useState} from 'react'


export default props => {
    const [input, setInput] = useState('input!');


    return (
        <div className="Input">
            <h2>{input}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }} >
                <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } />
                <input type="text" value="teste"  readOnly/> 
                <input type="text" value={undefined} /> 
            </div>
        </div>
    )
}



