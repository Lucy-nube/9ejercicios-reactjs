import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [len, setLen] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const generate = () => {
    const length = parseInt(len);
    if (!len || length < 4) {
      setErr('Error: La longitud debe ser mayor o igual a 4');
      setPass('');
      return;
    }
    setErr('');
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPass(generated);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>7. Generador de Contraseñas</h3>
      <input type="number" value={len} onChange={e => setLen(e.target.value)} placeholder="Longitud" style={inputStyle} />
      <button onClick={generate} style={btnStyle}>Generar</button>
      {err && <p style={{ color: 'red' }}>{err}</p>}
      {pass && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Pass: {pass}</p>}
      <br/><br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '6px 10px', cursor: 'pointer', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px' };
const inputStyle = { padding: '6px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '5px' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
