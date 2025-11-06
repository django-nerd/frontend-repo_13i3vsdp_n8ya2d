import React, { useEffect, useMemo, useState } from 'react';
import HeaderBar from './components/HeaderBar';
import TaskList from './components/TaskList';
import NewTaskModal from './components/NewTaskModal';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/tasks`);
      const data = await res.json();
      setTasks(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (payload) => {
    const res = await fetch(`${API}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setTasks((prev) => [data, ...prev]);
  };

  const updateTask = async (id, payload) => {
    const res = await fetch(`${API}/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setTasks((prev) => prev.map((t) => (t.id === id ? data : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/api/tasks/${id}`, { method: 'DELETE' });
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.assignee || '').toLowerCase().includes(q) ||
        (t.status || '').toLowerCase().includes(q)
    );
  }, [tasks, query]);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderBar onCreate={() => setOpen(true)} onRefresh={fetchTasks} />

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <div className="flex items-center gap-3">
          <input
            className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm"
            placeholder="Search tasks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="text-sm text-slate-500">{loading ? 'Loading…' : `${filtered.length} items`}</span>
        </div>

        <TaskList tasks={filtered} onUpdate={updateTask} onDelete={deleteTask} />
      </div>

      <NewTaskModal open={open} onClose={() => setOpen(false)} onSubmit={createTask} />
    </div>
  );
}

export default App;
