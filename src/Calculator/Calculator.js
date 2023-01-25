import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  // Initialize state variables
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [result, setResult] = useState("");
  const [decimalAdded, setDecimalAdded] = useState(false);
  const [lastClicked, setLastClicked] = useState("");

  // Event handlers for button clicks
  function handleNumberClick(event) {
    const value = event.target.textContent;
    if (input === "0" && value === "0") {
      return;
    }
    if (lastClicked === "operator") {
      setInput(value);
    } else {
      setInput(input + value);
    }
    setLastClicked("number");
  }

  function handleDecimalClick() {
    if (!decimalAdded) {
      if (lastClicked === "operator") {
        setInput("0.");
      } else {
        setInput(input + ".");
      }
      setDecimalAdded(true);
    }
    setLastClicked("decimal");
  }

  function handleOperatorClick(event) {
    if (lastClicked === "operator") {
      setOperator(event.target.textContent);
      return;
    }
    if (lastClicked === "result") {
      setFirstValue(result);
      setInput("");
    } else {
      setFirstValue(input);
      setInput("");
    }
    setOperator(event.target.textContent);
    setDecimalAdded(false);
    setLastClicked("operator");
  }

  function handleClearClick() {
    setInput("");
    setOperator("");
    setFirstValue("");
    setResult("");
    setDecimalAdded(false);
    setLastClicked("");
  }

      function handleEqualClick() {
        if (lastClicked === "operator") {
          return;
        }
        if (firstValue === "") {
          setResult(input);
        } else {
          const secondValue = input;
          switch (operator) {
            case "+":
              setResult(parseFloat(firstValue) + parseFloat(secondValue));
              break;
            case "-":
              setResult(parseFloat(firstValue) - parseFloat(secondValue));
              break;
            case "*":
              setResult(parseFloat(firstValue) * parseFloat(secondValue));
              break;
            case "/":
              setResult(parseFloat(firstValue) / parseFloat(secondValue));
              break;
            default:
              setResult(secondValue);
          }
        }
        if(result.toString().length > 15){
          setInput(Number.parseFloat(result).toExponential(6));
        }else{
          setInput(result.toString());
        }
        setLastClicked("result");
      }
    
      return (
        <div id="calculator">
          <div id="display">{input}</div>
          <button id="clear" onClick={handleClearClick}>C</button>
          <button id="divide" onClick={handleOperatorClick}>/</button>
          <button id="multiply" onClick={handleOperatorClick}>*</button>
          <button id="subtract" onClick={handleOperatorClick}>-</button>
          <button id="add" onClick={handleOperatorClick}>+</button>
          <button id="equals" onClick={handleEqualClick}>=</button>
          <button id="decimal" onClick={handleDecimalClick}>.</button>
          <button id="zero" onClick={handleNumberClick}>0</button>
          <button id="one" onClick={handleNumberClick}>1</button>
          <button id="two" onClick={handleNumberClick}>2</button>
          <button id="three" onClick={handleNumberClick}>3</button>
          <button id="four" onClick={handleNumberClick}>4</button>
          <button id="five" onClick={handleNumberClick}>5</button>
          <button id="six" onClick={handleNumberClick}>6</button>
          <button id="seven" onClick={handleNumberClick}>7</button>
          <button id="eight" onClick={handleNumberClick}>8</button>
          <button id="nine" onClick={handleNumberClick}>9</button>
        </div>
      );
    }


