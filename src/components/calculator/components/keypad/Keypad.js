import React, { useContext } from 'react';
import Button from "./Buton";
import { ResultContext } from "../../../result/Result";
import "./Keypad.css"

const Keypad = () => {

    //utiliza o hook useContext do React para acessar o valor do contexto ResultContext e extrair dele as propriedades result e setResult.
    const { result, setResult } = useContext(ResultContext)   

    const handleClick = (value) =>{
        setResult(result + value)
    };

    const handleClear = () => {
        setResult("")
    };

    const handleCalculate = () =>{
        try{
            // eslint-disable-next-line no-eval
            const calculatedResult = eval(result)
            setResult(calculatedResult.toString())
        } catch(error){
            setResult('Error')
        }
    }
    return (
        <div className="keypad">
          <div className="row">
            <Button onClick={() => handleClick('7')}>7</Button>
            <Button onClick={() => handleClick('8')}>8</Button>
            <Button onClick={() => handleClick('9')}>9</Button>
            <Button onClick={() => handleClick('/')}>/</Button>
          </div>
    
          <div className="row">
            <Button onClick={() => handleClick('4')}>4</Button>
            <Button onClick={() => handleClick('5')}>5</Button>
            <Button onClick={() => handleClick('6')}>6</Button>
            <Button onClick={() => handleClick('*')}>*</Button>
          </div>
    
          <div className="row">
            <Button onClick={() => handleClick('1')}>1</Button>
            <Button onClick={() => handleClick('2')}>2</Button>
            <Button onClick={() => handleClick('3')}>3</Button>
            <Button onClick={() => handleClick('-')}>-</Button>
          </div>
    
          <div className="row">
            <Button onClick={() => handleClick('0')}>0</Button>
            <Button onClick={() => handleClick('.')}>.</Button>
            <Button onClick={() => handleCalculate()}>=</Button>
            <Button onClick={() => handleClick('+')}>+</Button>
          </div>
    
          <div className="row">
            <Button onClick={() => handleClear()}>Clear</Button>
          </div>
        </div>
      );
};

export default Keypad