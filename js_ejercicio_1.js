import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [bgColor, setBgColor] = useState('#fafafa');
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(randomColor);
  };
  return (
    <div style={{ backgroundColor: bgColor, padding: '40px', borderRadius: '8px', textAlign: 'center', transition: '0.3s' }}>
      <h3>1. Cambiador de Color de Fondo</h3>
      <button onClick={changeColor} style={btnStyle}>Cambiar color</button>
      <br/><br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '10px 15px', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
