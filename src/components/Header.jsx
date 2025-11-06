import React from 'react';
import { Search, Plus, Settings, User } from 'lucide-react';

const Header = ({ onOpenCreate, onOpenSettings, searchQuery, onSearchChange }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">J</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900">Jira Clone</span>
            <span className="text-xs text-slate-500">Project Alpha</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search issues, assignees, labels..."
              className="w-full pl-9 pr-3 h-10 rounded-md border border-slate-200 bg-slate-50/60 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenCreate?.()}
            className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
          >
            <Plus className="h-4 w-4" />
            Create
          </button>
          <button onClick={() => onOpenSettings?.()} className="h-9 w-9 grid place-items-center rounded-md border border-slate-200 hover:bg-slate-50">
            <Settings className="h-5 w-5 text-slate-700" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center text-sm font-semibold">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
