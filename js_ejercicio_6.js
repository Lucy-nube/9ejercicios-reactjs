import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [sec, setSec] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (active) {
      timer = setInterval(() => setSec(s => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active]);

  const format = () => {
    const h = Math.floor(sec / 3600).toString().padStart(2, '0');
    const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>6. Temporizador</h3>
      <p style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>{format()}</p>
      <button onClick={() => setActive(true)} style={btnStyle}>Iniciar</button>
      <button onClick={() => setActive(false)} style={btnStyle}>Pausar</button>
      <button onClick={() => { setActive(false); setSec(0); }} style={btnStyle}>Reiniciar</button>
      <br/><br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '6px 10px', margin: '2px', cursor: 'pointer', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
