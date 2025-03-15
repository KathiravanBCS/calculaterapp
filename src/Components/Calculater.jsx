import React from 'react';
import "../Styles/Calculater.css"; // Import CSS for styling
import { useState } from 'react'; // Import useState hook for state management

export const Calculater = () => {
    // State for first number, second number, and result
    const [FirstNumber, setFirstNumber] = useState("");
    const [SecondNumber, setSecondNumber] = useState("");
    const [Result, setResult] = useState();

    // Error message for invalid inputs
    const ErrorMsg = "Please Enter Numbers in Both Input Boxes";

    // Function to validate inputs
    const ValidInputs = () => {
        if (FirstNumber === "" || SecondNumber === "") {
            alert(ErrorMsg); 
            return true;
        }
        return false;
    };

    // Function to handle addition
    const HandleAddition = () => {
        if (ValidInputs()) return;
        setResult(Number(FirstNumber) + Number(SecondNumber)); 
    };

    // Function to handle subtraction
    const HandleSubtraction = () => {
        if (ValidInputs()) return;
        setResult(Number(FirstNumber) - Number(SecondNumber)); 
    };

    // Function to handle multiplication
    const HandleMultiplication = () => {
        if (ValidInputs()) return;
        setResult(Number(FirstNumber) * Number(SecondNumber)); 
    };

    // Function to handle division
    const HandleDivision = () => {
        if (ValidInputs()) return;
        if (Number(SecondNumber) === 0) {
            alert("Division by zero is not allowed");
            return;
        }
        setResult(Number(FirstNumber) / Number(SecondNumber)); 
    };

    return (
        <div className='Container'>
            <h1>Calculator</h1>

            {/* Input for the first number */}
            <div className='input-container'>
                <label>Enter the First Number:</label>
                <input
                    type="Number"
                    value={FirstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                    placeholder="First Number"
                />
            </div>

            {/* Input for the second number */}
            <div className='input-container'>
                <label>Enter the Second Number:</label>
                <input
                    type="Number"
                    value={SecondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                    placeholder="Second Number"
                />
            </div>

            {/* Display the result */}
            <div className='input-container'>
                <label>Result</label>
                <input type="Number" value={Result} readOnly />
            </div>

            {/* Buttons for arithmetic operations */}
            <div className='button-group'>
                <button onClick={HandleAddition}>Add</button>
                <button onClick={HandleSubtraction}>Subtract</button>
                <button onClick={HandleMultiplication}>Multiply</button>
                <button onClick={HandleDivision}>Divide</button>
            </div>
        </div>
    );
};