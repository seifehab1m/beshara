import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
    },
  },
  base: "/", // Ensures correct asset paths
  build: {
    outDir: "dist", // Make sure Vercel serves from "dist"
  },
  server: {
    port: 5173,
  },
});
