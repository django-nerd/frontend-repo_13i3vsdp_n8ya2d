import React from 'react';
import { Plus } from 'lucide-react';

const Backlog = ({ issues, onOpenCreate, onMove }) => {
  const backlog = issues.filter(i => i.status === 'backlog' || i.status === 'selected');

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Backlog</h2>
          <p className="text-sm text-slate-500">Prioritize and plan your work</p>
        </div>
        <button onClick={onOpenCreate} className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">
          <Plus className="h-4 w-4" /> Create issue
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white divide-y">
        {backlog.map((i) => (
          <div key={i.id} className="p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{i.title}</div>
              <div className="text-xs text-slate-500">{i.id} • {i.tag} • {i.points}pt</div>
            </div>
            <div className="flex items-center gap-2">
              {i.status !== 'selected' && (
                <button onClick={() => onMove(i.id, 'selected')} className="px-2 h-8 rounded-md border text-xs hover:bg-slate-50">Move to selected</button>
              )}
              {i.status !== 'inprogress' && (
                <button onClick={() => onMove(i.id, 'inprogress')} className="px-2 h-8 rounded-md border text-xs hover:bg-slate-50">Start progress</button>
              )}
              {i.status !== 'done' && (
                <button onClick={() => onMove(i.id, 'done')} className="px-2 h-8 rounded-md border text-xs hover:bg-slate-50">Complete</button>
              )}
            </div>
          </div>
        ))}
        {backlog.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-sm">No issues in backlog</div>
        )}
      </div>
    </div>
  );
};

export default Backlog;
