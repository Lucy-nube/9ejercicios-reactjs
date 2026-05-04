import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [search, setSearch] = useState('');
  const data = ["Perro", "Gato", "Pez", "Loro", "Caballo", "Gamba"];
  const filtered = data.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h3>4. Filtro de Búsqueda</h3>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar animal..." style={inputStyle} />
      <ul style={{ textAlign: 'left', marginTop: '15px' }}>
        {filtered.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const inputStyle = { padding: '6px', borderRadius: '4px', border: '1px solid #ccc' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
