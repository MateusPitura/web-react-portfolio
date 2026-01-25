import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { version } from './package.json'

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    base: mode === "production" ? "/web-react-portfolio" : "/",
    build: {
      // assetsDir: "static"
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // if (
            //   /\.(png|jpe?g|svg|gif|webp|ico)$/i.test(assetInfo.name ?? "")
            // ) {
            //   return `assets/[name][extname]`;
            // }

            return `${version}/[name]-[hash][extname]`;
          },
        },
      },
    },
  });
};
