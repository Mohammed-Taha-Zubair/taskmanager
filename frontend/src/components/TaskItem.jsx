export default function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      <span className="task-item__title">{task.title}</span>
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
