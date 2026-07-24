import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import TaskList from './TaskList';

export default function TaskContent({ loading, error, tasks, onToggle, onDelete }) {
  if (loading) return <LoadingSpinner />;

  if (tasks.length === 0 && !error) return <EmptyState />;

  return <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />;
}
