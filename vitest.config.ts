import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url)),
      "#shared": fileURLToPath(new URL("./shared", import.meta.url)),
      "#server": fileURLToPath(new URL("./server", import.meta.url)),
      "#test-support": fileURLToPath(new URL("./tests/support", import.meta.url)),
      "#backend-test-support": fileURLToPath(new URL("./tests/backend/support", import.meta.url)),
    },
  },
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
