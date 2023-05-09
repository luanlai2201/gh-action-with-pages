import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

const env = loadEnv("production", process.cwd(), "");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: `dist/${env.PR_NUMBER || ""}`,
  },
});
