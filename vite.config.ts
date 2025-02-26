import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
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
});
