import React from 'react';
import { GripVertical, MoreHorizontal, Plus } from 'lucide-react';

const columns = [
  { key: 'backlog', title: 'Backlog' },
  { key: 'selected', title: 'Selected for Development' },
  { key: 'inprogress', title: 'In Progress' },
  { key: 'done', title: 'Done' },
];

const mockIssues = [
  { id: 'ISSUE-101', title: 'User can sign in with email', assignee: 'Alex', points: 3, status: 'backlog', tag: 'Auth' },
  { id: 'ISSUE-102', title: 'Design marketing landing page', assignee: 'Maya', points: 5, status: 'selected', tag: 'Design' },
  { id: 'ISSUE-103', title: 'Implement Kanban board drag & drop', assignee: 'Chris', points: 8, status: 'inprogress', tag: 'Feature' },
  { id: 'ISSUE-104', title: 'Fix 500 on /projects endpoint', assignee: 'Sam', points: 2, status: 'inprogress', tag: 'Bug' },
  { id: 'ISSUE-105', title: 'Add analytics event tracking', assignee: 'Taylor', points: 3, status: 'done', tag: 'Analytics' },
];

const IssueCard = ({ issue }) => {
  return (
    <div className="group rounded-lg border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-medium text-slate-500">{issue.id}</span>
        <MoreHorizontal className="h-4 w-4 text-slate-500" />
      </div>
      <div className="mt-1 text-sm font-medium text-slate-800">
        {issue.title}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700">
          {issue.tag}
        </span>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-[11px] font-semibold">
            {issue.assignee?.charAt(0)}
          </div>
          <div className="h-6 min-w-6 px-1 rounded-md bg-slate-100 text-slate-700 text-[10px] grid place-items-center font-medium">
            {issue.points}
          </div>
        </div>
      </div>
    </div>
  );
};

const Column = ({ title, issues }) => {
  return (
    <div className="flex-1 min-w-[260px]">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <GripVertical className="h-4 w-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">{title}</span>
          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{issues.length}</span>
        </div>
        <button className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700 text-xs">
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
      <div className="mt-3 space-y-3">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

const Board = () => {
  const grouped = columns.reduce((acc, col) => {
    acc[col.key] = mockIssues.filter((i) => i.status === col.key);
    return acc;
  }, {});

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div key={col.key} className="w-[300px] shrink-0">
            <Column title={col.title} issues={grouped[col.key] || []} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
