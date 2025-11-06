import React from 'react';
import { Rocket, Bug, CheckCircle2, Clock } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, color }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg grid place-items-center ${color} text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  </div>
);

const Overview = ({ issues }) => {
  const total = issues.length;
  const bugs = issues.filter(i => i.tag === 'Bug').length;
  const done = issues.filter(i => i.status === 'done').length;
  const inProgress = issues.filter(i => i.status === 'inprogress').length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-sm text-slate-500">Snapshot of your project health</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat icon={Rocket} label="Total issues" value={total} color="bg-indigo-600" />
        <Stat icon={Bug} label="Bugs" value={bugs} color="bg-rose-600" />
        <Stat icon={CheckCircle2} label="Completed" value={done} color="bg-emerald-600" />
        <Stat icon={Clock} label="In progress" value={inProgress} color="bg-amber-600" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-semibold mb-3">Recent activity</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {issues.slice(0, 6).map((i) => (
            <li key={i.id} className="flex items-center justify-between">
              <span>{i.title}</span>
              <span className="text-xs text-slate-500">{i.status}</span>
            </li>
          ))}
          {issues.length === 0 && <li className="text-slate-500">No activity yet</li>}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
