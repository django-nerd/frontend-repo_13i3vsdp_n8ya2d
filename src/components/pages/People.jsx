import React from 'react';
import { User, Mail } from 'lucide-react';

const People = ({ issues }) => {
  const byAssignee = issues.reduce((acc, i) => {
    const key = i.assignee || 'Unassigned';
    acc[key] = acc[key] || [];
    acc[key].push(i);
    return acc;
  }, {});

  const people = Object.entries(byAssignee).map(([name, items]) => ({ name, count: items.length }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">People</h2>
        <p className="text-sm text-slate-500">Team members and their workload</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((p) => (
          <div key={p.name} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-slate-500">{p.count} issue{p.count !== 1 ? 's' : ''}</div>
              </div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-3 h-9 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
              <Mail className="h-4 w-4" /> Message
            </button>
          </div>
        ))}
        {people.length === 0 && (
          <div className="text-slate-500">No team members yet</div>
        )}
      </div>
    </div>
  );
};

export default People;
