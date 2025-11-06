import React from 'react';
import { Plus, RefreshCw } from 'lucide-react';

const HeaderBar = ({ onCreate, onRefresh }) => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">T</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900">Tasks</span>
            <span className="text-xs text-slate-500">Manage, update, delete</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onRefresh} className="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          <button onClick={onCreate} className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">
            <Plus className="h-4 w-4" /> New Task
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
