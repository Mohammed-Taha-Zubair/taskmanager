export default function ErrorBanner({ message, onRetry }) {
  if (!message) return null;

  return (
    <div className="app-error" role="alert">
      {message}
      <button type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}
