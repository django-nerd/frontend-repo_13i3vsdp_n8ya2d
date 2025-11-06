import React, { useState } from 'react';
import { X, Tag, User, Hash, Loader2 } from 'lucide-react';

const initialForm = { title: '', description: '', assignee: '', tag: 'Task', points: 3 };

const CreateIssueModal = ({ open, onClose, onCreate }) => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onCreate({ ...form, id: `ISSUE-${Math.floor(Math.random() * 900 + 100)}`, status: 'backlog' });
      setForm(initialForm);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-slate-900/40 p-4">
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Create issue</h3>
          <button onClick={onClose} className="h-8 w-8 grid place-items-center rounded-md hover:bg-slate-100">
            <X className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-700">Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="mt-1 w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a short, clear summary"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-700">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Add more context or acceptance criteria"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 sm:col-span-1">
              <label className="text-xs font-medium text-slate-700 flex items-center gap-1"><User className="h-3 w-3" /> Assignee</label>
              <input
                value={form.assignee}
                onChange={(e) => setForm({ ...form, assignee: e.target.value })}
                className="mt-1 w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Name or email"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700 flex items-center gap-1"><Tag className="h-3 w-3" /> Type</label>
              <select
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                className="mt-1 w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Task</option>
                <option>Bug</option>
                <option>Story</option>
                <option>Feature</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700 flex items-center gap-1"><Hash className="h-3 w-3" /> Points</label>
              <input
                type="number"
                min={1}
                max={13}
                value={form.points}
                onChange={(e) => setForm({ ...form, points: Number(e.target.value) })}
                className="mt-1 w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-3 h-9 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">Cancel</button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIssueModal;
