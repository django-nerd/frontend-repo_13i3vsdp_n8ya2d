import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  if (!tasks.length) {
    return <div className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-500 text-sm">No tasks yet</div>;
  }
  return (
    <div className="space-y-3">
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} onUpdate={onUpdate} onDelete={onDelete} />)
      )}
    </div>
  );
};

export default TaskList;
