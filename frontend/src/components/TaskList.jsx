import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
