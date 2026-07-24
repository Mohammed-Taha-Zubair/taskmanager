function getSubtitle(loading, count) {
  if (loading) return 'Loading your list…';
  if (count === 0) return 'Nothing here yet — add your first task below.';
  return `${count} ${count === 1 ? 'task' : 'tasks'} to do`;
}

export default function AppHeader({ loading, taskCount }) {
  return (
    <header className="app-header">
      <div className="app-header__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1>Tasks</h1>
      <p className="app-header__subtitle">{getSubtitle(loading, taskCount)}</p>
    </header>
  );
}
