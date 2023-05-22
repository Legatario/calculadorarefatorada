import React, { useContext } from 'react';
import { ResultContext } from "../../../result/Result";
import "./Display.css"

const Display = () =>{
    const { result } = useContext(ResultContext);

    return (
        <input type="text" value={result} disabled className='display'/>
    )
}

export default Display