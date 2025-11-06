import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import CreateIssueModal from './components/CreateIssueModal';

function App() {
  const [openCreate, setOpenCreate] = useState(false);
  const [issues, setIssues] = useState([]);

  const handleCreate = async (issue) => {
    // In a full app this would call the backend; for now we optimistically add to UI
    setIssues((prev) => [issue, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header onOpenCreate={() => setOpenCreate(true)} />
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[16rem_1fr]">
        <Sidebar />
        <main className="min-h-[calc(100vh-4rem)]">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold">Board</h1>
                <p className="text-sm text-slate-500">Plan, track, and ship your work</p>
              </div>
            </div>
          </div>
          <Board />
        </main>
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
