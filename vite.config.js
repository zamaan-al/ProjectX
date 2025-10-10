import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // smaller production bundle
    rollupOptions: {
      output: {
        // Group major libs into predictable chunks (faster caching)
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    open: true, // auto-open during dev
  },
  preview: {
    port: 4173, // consistent port for preview
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
