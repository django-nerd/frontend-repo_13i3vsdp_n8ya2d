import React, { useState } from 'react';
import { X } from 'lucide-react';

const NewTaskModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ title: '', description: '', assignee: '', priority: 'medium' });
  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    setForm({ title: '', description: '', assignee: '', priority: 'medium' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">New Task</h3>
          <button onClick={onClose} className="h-8 w-8 grid place-items-center rounded-md hover:bg-slate-100">
            <X className="h-4 w-4 text-slate-600" />
          </button>
        </div>
        <form onSubmit={submit} className="p-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-700">Title</label>
            <input className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-700">Description</label>
            <textarea className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" rows={3} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-700">Assignee</label>
              <input className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm" value={form.assignee} onChange={e=>setForm({...form,assignee:e.target.value})} />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700">Priority</label>
              <select className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm" value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-3 h-9 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">Cancel</button>
            <button type="submit" className="px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTaskModal;
