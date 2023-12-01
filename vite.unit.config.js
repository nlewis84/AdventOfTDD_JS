import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/tests/unit/**/*.{vite, vitest}.test.js"]
  }
});
