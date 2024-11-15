import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-surface-light dark:bg-surface-dark z-50">
      <main>
        <CircularProgress color="inherit" />
      </main>
    </div>
  );
}
