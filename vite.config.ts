import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), svgr()],
    server: {
      port: Number(env.APP_PORT),
    },
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "./src/app"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
      },
    },
  };
});
