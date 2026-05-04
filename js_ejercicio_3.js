import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  
  const add = () => {
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), text: input }]);
    setInput('');
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h3>3. Lista Dinámica</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe algo..." style={inputStyle} />
      <button onClick={add} style={btnStyle}>Agregar</button>
      <ul style={{ textAlign: 'left', marginTop: '15px' }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '5px' }}>
            {item.text} {' '}
            <button onClick={() => setItems(items.filter(i => i.id !== item.id))} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>✖</button>
          </li>
        ))}
      </ul>
      <br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '6px 10px', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const inputStyle = { padding: '6px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '5px' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
