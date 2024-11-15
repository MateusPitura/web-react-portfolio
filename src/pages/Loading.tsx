import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-surface-light dark:bg-surface-dark z-50">
      <main className="text-onSurface-light darK:text-onSurface-dark">
        <CircularProgress color="inherit" />
      </main>
    </div>
  );
}
