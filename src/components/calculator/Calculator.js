import React from 'react';
import Display from './components/display/Display';
import Keypad from './components/keypad/Keypad';
import "./Calculator.css"

const Calculator = () =>{
    return(
        <div className='calculator'>
            <Display />
            <Keypad />
        </div>
    );
}

export default Calculator

//chamada para os componentes da tela e da mesa de numeros