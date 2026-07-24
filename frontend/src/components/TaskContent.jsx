import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import TaskList from './TaskList';

export default function TaskContent({ loading, error, tasks, onDelete }) {
  if (loading) return <LoadingSpinner />;

  if (tasks.length === 0 && !error) return <EmptyState />;

  return <TaskList tasks={tasks} onDelete={onDelete} />;
}
