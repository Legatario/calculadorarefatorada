
import './App.css';
import React from 'react';
import Calculator from './components/calculator/Calculator';
import { Result } from './components/result/Result';

function App() {
  return (
    <Result>
      <Calculator />
    </Result>
  );
}

export default App;

// o Calculator esteja envolvido pelo Result para fornecer o contexto necessário para os componentes filhos, como Display e Keypad.