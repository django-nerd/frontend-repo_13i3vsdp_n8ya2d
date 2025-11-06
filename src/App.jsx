import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreateIssueModal from './components/CreateIssueModal';
import Overview from './components/pages/Overview';
import Backlog from './components/pages/Backlog';
import People from './components/pages/People';
import Reports from './components/pages/Reports';
import BoardView from './components/Board';

const seedIssues = [
  { id: 'ISSUE-101', title: 'User can sign in with email', assignee: 'Alex', points: 3, status: 'backlog', tag: 'Auth' },
  { id: 'ISSUE-102', title: 'Design marketing landing page', assignee: 'Maya', points: 5, status: 'selected', tag: 'Design' },
  { id: 'ISSUE-103', title: 'Implement Kanban board drag & drop', assignee: 'Chris', points: 8, status: 'inprogress', tag: 'Feature' },
  { id: 'ISSUE-104', title: 'Fix 500 on /projects endpoint', assignee: 'Sam', points: 2, status: 'inprogress', tag: 'Bug' },
  { id: 'ISSUE-105', title: 'Add analytics event tracking', assignee: 'Taylor', points: 3, status: 'done', tag: 'Analytics' },
];

function App() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [activePage, setActivePage] = useState('board');
  const [issues, setIssues] = useState(seedIssues);
  const [search, setSearch] = useState('');

  const filteredIssues = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return issues;
    return issues.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.id.toLowerCase().includes(q) ||
      (i.assignee || '').toLowerCase().includes(q) ||
      (i.tag || '').toLowerCase().includes(q)
    );
  }, [issues, search]);

  const handleCreate = async (issue) => {
    setIssues((prev) => [issue, ...prev]);
  };

  const handleMove = (id, status) => {
    setIssues(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview issues={filteredIssues} />;
      case 'backlog':
        return <Backlog issues={filteredIssues} onOpenCreate={() => setOpenCreate(true)} onMove={handleMove} />;
      case 'people':
        return <People issues={filteredIssues} />;
      case 'reports':
        return <Reports issues={filteredIssues} />;
      case 'settings':
        return (
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Lazy import alternative could be used; to keep files simple reuse inline import */}
            {React.createElement(require('./components/pages/Settings').default)}
          </div>
        );
      default:
        return <BoardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        onOpenCreate={() => setOpenCreate(true)}
        onOpenSettings={() => setActivePage('settings')}
        searchQuery={search}
        onSearchChange={setSearch}
      />
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[16rem_1fr]">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        <main className="min-h-[calc(100vh-4rem)]">{renderPage()}</main>
      </div>

      <CreateIssueModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}

export default App;
