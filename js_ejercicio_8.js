import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [text, setText] = useState('');
  const chars = text.replace(/\s/g, '').length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h3>8. Contador de Palabras y Caracteres</h3>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Escribe un párrafo..." style={{ width: '100%', height: '100px', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <p style={{ textAlign: 'left' }}><strong>Caracteres (sin espacios):</strong> {chars}</p>
      <p style={{ textAlign: 'left' }}><strong>Palabras:</strong> {words}</p>
      <br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
