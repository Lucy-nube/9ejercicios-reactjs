import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h3>9. Lista de Tareas (Storage)</h3>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nueva tarea..." style={inputStyle} />
      <button onClick={addTask} style={btnStyle}>Agregar</button>
      <ul style={{ textAlign: 'left', marginTop: '15px' }}>
        {tasks.map(t => (
          <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none', marginBottom: '5px' }}>
            <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} /> {t.text}
          </li>
        ))}
      </ul>
      <button onClick={() => setTasks(tasks.filter(t => !t.completed))} style={{ ...btnStyle, backgroundColor: '#ff4646' }}>Limpiar completadas</button>
      <br/><br/>
      <a href="/index.html">⬅ Volver al índice</a>
    </div>
  );
}

const btnStyle = { padding: '6px 10px', cursor: 'pointer', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px' };
const inputStyle = { padding: '6px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '5px' };
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
