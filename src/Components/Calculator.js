import React, { useState } from 'react';
import './Calculator.css'; // Assuming you create a CSS file for styling

function Calculator() {
  const [data, setData] = useState('');

  function handleClick(val) {
    setData(data + val);
  }

  function clearInput() {
    setData('');
  }

  function calculateResult() {
    try {
      setData(String(eval(data))); // Use String to convert result to string
    } catch {
      setData('Error');
    }
  }

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-input"
        placeholder="Enter sum here"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <div className="calculator-buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
