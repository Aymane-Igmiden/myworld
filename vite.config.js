import { defineConfig } from "vite";

export default defineConfig({
  base: "/myworld",
  build: {
    minify: "terser",
  },
});