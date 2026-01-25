export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center bg-surface-light dark:bg-surface-dark">
      <div
        className="w-10 h-10 border-4 border-onSurface-light border-solid animate-spin rounded-full border-t-transparent z-50"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
