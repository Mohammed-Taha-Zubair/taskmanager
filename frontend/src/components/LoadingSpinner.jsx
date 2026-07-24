export default function LoadingSpinner({ label = 'Loading tasks…' }) {
  return (
    <div className="app-loading">
      <span className="app-loading__spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
