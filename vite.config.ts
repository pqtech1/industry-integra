import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8081,
    strictPort: true,
    // Add allowed hosts
    allowedHosts: [
      "techupgrad.in",
      "www.techupgrad.in",
      "97.74.93.54",
      "localhost",
    ],
    // Keep or adjust the origin
    origin: "https://techupgrad.in",
  },
  base: "/industry-integra/",
  plugins: [
    react(),
    tailwindcss(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
