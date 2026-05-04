import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [res, setRes] = useState('');

  const calc = (op) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) { setRes('Error: Campos vacíos'); return; }
    if (op === '/' && num2 === 0) { setRes('Error: Div entre cero'); return; }
    
    if (op === '+') setRes(num1 + num2);
    if (op === '-') setRes(num1 - num2);
    if (op === '*') setRes(num1 * num2);
    if (op === '/') setRes(num1 / num2);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>5. Calculadora Sencilla</h3>
      <input type="number" value={n1} onChange={e => setN1(e.target.value)} style={inputStyle} placeholder="Número 1" />
      <input type="number" value={n2} onChange={e => setN2(e.target.value)} style={inputStyle} placeholder="Número 2" />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => calc('+')} style={btnStyle}>Sumar</button>
        <button onClick={() => calc('-')} style={btnStyle}>Restar</button>
        <button onClick={() => calc('*')} style={btnStyle}>Multiplicar</button>
        <button onClick={() => calc('/')} style={btnStyle}>Dividir</button>
      </div>
      <p style={{ marginTop: '15px', fontWeight: 'bold' }}>Resultado: {res}</p>
      <br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '6px 10px', margin: '2px', cursor: 'pointer', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px' };
const inputStyle = { padding: '6px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '5px' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
