import './App.css';
import { useTasks } from './hooks/useTasks';
import AppHeader from './components/AppHeader';
import TaskForm from './components/TaskForm';
import ErrorBanner from './components/ErrorBanner';
import TaskContent from './components/TaskContent';

function App() {
  const { tasks, loading, error, submitting, fetchTasks, addTask, toggleTask, removeTask } =
    useTasks();

  return (
    <div className="app">
      <AppHeader loading={loading} taskCount={tasks.length} />

      <main className="app-main">
        <TaskForm onSubmit={addTask} submitting={submitting} />
        <ErrorBanner message={error} onRetry={fetchTasks} />
        <TaskContent
          loading={loading}
          error={error}
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={removeTask}
        />
      </main>
    </div>
  );
}

export default App;
