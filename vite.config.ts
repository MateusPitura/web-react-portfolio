import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    base: mode === "production" ? "/web-react-portfolio" : "/",
  });
};