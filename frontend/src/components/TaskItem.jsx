export default function TaskItem({ task, onToggle, onDelete }) {
  const formattedDate = task.createdAt
    ? new Date(task.createdAt).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={!!task.completed}
        onChange={(e) => onToggle?.(task._id, e.target.checked)}
        className="task-item__checkbox"
      />
      <span
        className={`task-item__title ${
          task.completed ? 'task-item__title--completed' : ''
        }`}
      >
        {task.title}
      </span>
      <span className="task-item__date">{formattedDate}</span>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => onDelete(task._id)}
        aria-label={`Delete "${task.title}"`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>
    </li>
  );
}
