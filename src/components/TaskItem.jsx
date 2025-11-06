import React, { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';

const statuses = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'selected', label: 'Selected' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title: task.title,
    status: task.status,
    assignee: task.assignee || '',
    priority: task.priority || 'medium',
  });

  const save = async () => {
    await onUpdate(task.id, form);
    setEditing(false);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 flex items-start justify-between gap-4">
      <div className="flex-1">
        {editing ? (
          <div className="space-y-2">
            <input
              className="w-full h-9 px-3 rounded-md border border-slate-200 text-sm"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-2">
              <select
                className="h-9 px-2 rounded-md border border-slate-200 text-sm"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                {statuses.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <input
                className="h-9 px-3 rounded-md border border-slate-200 text-sm"
                placeholder="Assignee"
                value={form.assignee}
                onChange={(e) => setForm({ ...form, assignee: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="text-sm font-semibold">{task.title}</div>
            <div className="text-xs text-slate-500 mt-0.5">{task.status} {task.assignee ? `• ${task.assignee}` : ''}</div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        {editing ? (
          <>
            <button onClick={() => setEditing(false)} className="h-9 w-9 grid place-items-center rounded-md border hover:bg-slate-50">
              <X className="h-4 w-4" />
            </button>
            <button onClick={save} className="h-9 w-9 grid place-items-center rounded-md bg-emerald-600 text-white hover:bg-emerald-500">
              <Check className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)} className="h-9 w-9 grid place-items-center rounded-md border hover:bg-slate-50">
              <Pencil className="h-4 w-4" />
            </button>
            <button onClick={() => onDelete(task.id)} className="h-9 w-9 grid place-items-center rounded-md border hover:bg-rose-50 text-rose-600 border-rose-200">
              <Trash2 className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
