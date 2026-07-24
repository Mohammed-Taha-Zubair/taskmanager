export default function TaskItem({ task, onDelete }) {
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
      <span className="task-item__title">{task.title}</span>
      <span className="task-item__date">{formattedDate}</span>
      <input type="checkbox" value={task.completed}/>
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
