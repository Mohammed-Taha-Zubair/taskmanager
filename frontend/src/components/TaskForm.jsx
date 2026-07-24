import { useState } from 'react';

export default function TaskForm({ onSubmit, submitting }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed || submitting) return;

    try {
      await onSubmit(trimmed);
      setTitle('');
    } catch {
      // Error is handled by useTasks
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={submitting}
        aria-label="New task title"
      />
      <button
        type="submit"
        className="task-form__button"
        disabled={!title.trim() || submitting}
      >
        {submitting ? 'Adding…' : 'Add task'}
      </button>
    </form>
  );
}
