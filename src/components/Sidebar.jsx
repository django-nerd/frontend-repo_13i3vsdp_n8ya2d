import React from 'react';
import { LayoutGrid, Home, Settings, ListChecks, Users, BarChart3 } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition 
      ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
  >
    <Icon className="h-5 w-5" />
    {label}
  </button>
);

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="hidden md:flex md:w-64 shrink-0 border-r border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-full h-full p-4 space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 mb-2">Main</div>
          <nav className="space-y-1">
            <NavItem icon={Home} label="Overview" active={activePage==='overview'} onClick={() => onNavigate('overview')} />
            <NavItem icon={LayoutGrid} label="Board" active={activePage==='board'} onClick={() => onNavigate('board')} />
            <NavItem icon={ListChecks} label="Backlog" active={activePage==='backlog'} onClick={() => onNavigate('backlog')} />
            <NavItem icon={Users} label="People" active={activePage==='people'} onClick={() => onNavigate('people')} />
            <NavItem icon={BarChart3} label="Reports" active={activePage==='reports'} onClick={() => onNavigate('reports')} />
          </nav>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 mb-2">Project</div>
          <div className="space-y-2">
            <div className="px-3 py-2 rounded-md bg-gradient-to-br from-indigo-50 to-fuchsia-50 border border-slate-200">
              <div className="text-xs text-slate-500">Sprint</div>
              <div className="text-sm font-semibold text-slate-800">Sprint 12</div>
              <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-indigo-500" />
              </div>
              <div className="mt-1 text-[11px] text-slate-500">8/12 issues completed</div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button onClick={() => onNavigate('settings')} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Settings className="h-4 w-4" />
            Project settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
