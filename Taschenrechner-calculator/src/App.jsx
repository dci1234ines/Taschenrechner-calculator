import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (input.includes("/0")) {
          setResult("Error: Division durch 0");
        } else {
          setResult(eval(input).toString());
        }
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const handleAdvancedOperation = (operation) => {
    try {
      if (operation === "sqrt") {
        setResult(Math.sqrt(eval(input)).toString());
      } else if (operation === "^") {
        setResult(Math.pow(eval(input), 2).toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <h1>Taschenrechner</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <h2>{result}</h2>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button> cd Taschenrechner-calculator
  npm install
  npm run dev
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button className="clear" onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleAdvancedOperation("sqrt")}>√</button>
          <button onClick={() => handleAdvancedOperation("^")}>x²</button>
        </div>
        <div className="mode-toggle">
          <button onClick={toggleMode}>
            {isDarkMode ? "Licht Modus" : "Dunkel Modus"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;