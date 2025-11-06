import React from 'react';

const Bar = ({ label, value, color }) => (
  <div>
    <div className="h-24 w-full bg-slate-100 rounded-md overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
    </div>
    <div className="mt-2 flex items-center justify-between text-xs">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium">{value}%</span>
    </div>
  </div>
);

const Reports = ({ issues }) => {
  const total = issues.length || 1;
  const backlog = Math.round((issues.filter(i => i.status === 'backlog').length / total) * 100);
  const selected = Math.round((issues.filter(i => i.status === 'selected').length / total) * 100);
  const inprogress = Math.round((issues.filter(i => i.status === 'inprogress').length / total) * 100);
  const done = Math.round((issues.filter(i => i.status === 'done').length / total) * 100);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Reports</h2>
        <p className="text-sm text-slate-500">Quick snapshot of workflow distribution</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Bar label="Backlog" value={backlog} color="bg-slate-400" />
        <Bar label="Selected" value={selected} color="bg-indigo-500" />
        <Bar label="In Progress" value={inprogress} color="bg-amber-500" />
        <Bar label="Done" value={done} color="bg-emerald-500" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        Velocity is a measure of the amount of work a team can tackle during a single sprint. With persistence enabled later, we can chart this over time.
      </div>
    </div>
  );
};

export default Reports;
