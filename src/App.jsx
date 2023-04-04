import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [prevInput, setPrevInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (event) => {
    const digit = event.target.value;
    setInput((prevInput) => {
      if (prevInput === '0') {
        return digit;
      } else {
        return prevInput + digit;
      }
    });
  };

  const handleOperatorClick = (event) => {
    const operator = event.target.value;
    setPrevInput(input);
    setInput('0');
    setOperation(operator);
  };

  const handleEqualClick = () => {
    const inputValue = parseFloat(input);
    const prevInputValue = parseFloat(prevInput);
    let result;
    switch (operation) {
      case '+':
        result = prevInputValue + inputValue;
        break;
      case '-':
        result = prevInputValue - inputValue;
        break;
      case '*':
        result = prevInputValue * inputValue;
        break;
      case '/':
        result = prevInputValue / inputValue;
        break;
      default:
        result = inputValue;
    }
    setInput(result.toString());
    setPrevInput(null);
    setOperation(null);
  };

  const handleClearClick = () => {
    setInput('0');
    setPrevInput(null);
    setOperation(null);
  };

  return (
    <div className="flex-container-column card">
      <input className="display" type="text" value={input} readOnly />

      <div className="flex-container-row">
        <button onClick={handleNumberClick} value="7">
          7
        </button>
        <button onClick={handleNumberClick} value="8">
          8
        </button>
        <button onClick={handleNumberClick} value="9">
          9
        </button>
        <button className="operator" onClick={handleOperatorClick} value="*">
          *
        </button>
      </div>
      <div className="flex-container-row">
        <button onClick={handleNumberClick} value="4">
          4
        </button>
        <button onClick={handleNumberClick} value="5">
          5
        </button>
        <button onClick={handleNumberClick} value="6">
          6
        </button>
        <button className="operator" onClick={handleOperatorClick} value="/">
          /
        </button>
      </div>
      <div className="flex-container-row">
        <button onClick={handleNumberClick} value="1">
          1
        </button>
        <button onClick={handleNumberClick} value="2">
          2
        </button>
        <button onClick={handleNumberClick} value="3">
          3
        </button>
        <button className="operator" onClick={handleOperatorClick} value="+">
          +
        </button>
      </div>
      <div className="flex-container-row">
        <button onClick={handleNumberClick} value="0">
          0
        </button>
        <button className="operator" onClick={handleClearClick}>
          C
        </button>
        <button className="operator" onClick={handleEqualClick}>
          =
        </button>
        <button className="operator" onClick={handleOperatorClick} value="-">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
