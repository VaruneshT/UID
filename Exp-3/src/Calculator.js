// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Import the updated CSS

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculateResult = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult);
            setInput('');
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly className="calculator-input" />
            <div className="calculator-result">{result}</div>
            <div className="calculator-buttons">
                {['7', '8', '9', '/',
                  '4', '5', '6', '*',
                  '1', '2', '3', '-',
                  'C', '0', '=', '+'].map((btn) => (
                    <button key={btn} onClick={() => {
                        if (btn === '=') {
                            calculateResult();
                        } else if (btn === 'C') {
                            clearInput();
                        } else {
                            handleClick(btn);
                        }
                    }} className="calculator-button">
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
