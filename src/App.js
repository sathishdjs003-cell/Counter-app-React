import React, { useState } from 'react';

const Counter = () => {
  // Requirement: Initialize counter value using useState hook
  const [count, setCount] = useState(0);

  // Function to handle Increment
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle Decrement
  const handleDecrement = () => {
    // Requirement: Prevent counter from going below zero
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  // Function to handle Reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h2>Counter Application</h2>
      
      {/* Display the counter value */}
      <div style={styles.display}>
        <h1>{count}</h1>
      </div>

      {/* Requirement: Increment, Decrement, and Reset buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleIncrement}>
          Increment
        </button>
        
        <button style={styles.button} onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        
        <button style={{...styles.button, ...styles.resetBtn}} onClick={handleReset}>
          Reset
        </button>
      </div>

      {/* Requirement: Conditional rendering to show message */}
      {count === 0 && (
        <p style={styles.message}>Minimum limit reached</p>
      )}
    </div>
  );
};

// Requirement: Apply basic styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    
    
  },
  display: {
    fontSize: '2rem',
    margin: '20px 0',
    color: '#333'
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s'
  },
  resetBtn: {
    backgroundColor: '#DC3545',
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '10px'
  }
};

export default Counter;