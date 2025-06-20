import React, { useState } from "react";

function Counter() {
  const [inputText, setText] = useState("");
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  const backgroundStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1517816428104-797678c7cf81?auto=format&fit=crop&w=1350&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    zIndex: -2,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // black overlay with 50% opacity
    zIndex: -1,
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    padding: "20px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "20px",
    outline: "none",
  };

  const countStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "12px 20px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    transition: "transform 0.2s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>

      <div style={cardStyle}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          style={inputStyle}
          placeholder="Type something..."
        />
        <p>Inputted Text is: <strong>{inputText}</strong></p>
        <div style={countStyle}>Counter: {count}</div>
        <div>
          <button
            style={{ ...buttonStyle, backgroundColor: "#28a745" }}
            onClick={increase}
          >
            Increase
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
            onClick={decrease}
          >
            Decrease
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#007bff" }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
