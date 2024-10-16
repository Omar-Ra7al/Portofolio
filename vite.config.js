import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use 'esbuild' for faster minification or 'terser' for better compression
    minify: "terser", // Use 'esbuild' if you want faster build times
  },
});
