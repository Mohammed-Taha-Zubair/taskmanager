export default function EmptyState() {
  return (
    <div className="app-empty">
      <div className="app-empty__icon" aria-hidden="true">
        ✦
      </div>
      <p>Your list is empty</p>
      <span>Type something above to get started.</span>
    </div>
  );
}
