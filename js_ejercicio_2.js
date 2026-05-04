import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h3>2. Contador de Clics</h3>
      <p style={{ fontSize: '1.5rem' }}>Clics: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)} style={btnStyle}>Contar clics</button>
      <br/><br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '10px 15px', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
