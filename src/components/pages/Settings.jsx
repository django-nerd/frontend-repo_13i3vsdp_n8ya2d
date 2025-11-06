import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('Project Alpha');
  const [key, setKey] = useState('PA');
  const [defaultAssignee, setDefaultAssignee] = useState('Unassigned');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Project settings</h2>
        <p className="text-sm text-slate-500">Tweak preferences for this project</p>
      </div>

      <form onSubmit={handleSave} className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 max-w-xl">
        <div>
          <label className="text-xs font-medium text-slate-700">Project name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700">Project key</label>
          <input value={key} onChange={(e)=>setKey(e.target.value)} className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700">Default assignee</label>
          <input value={defaultAssignee} onChange={(e)=>setDefaultAssignee(e.target.value)} className="mt-1 w-full h-10 rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex items-center gap-2">
          <button type="submit" className="px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">Save changes</button>
          {saved && <span className="text-xs text-emerald-600">Saved</span>}
        </div>
      </form>
    </div>
  );
};

export default Settings;
