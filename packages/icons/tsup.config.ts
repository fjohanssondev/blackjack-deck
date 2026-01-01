import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "outline/index": "src/outline/index.ts",
    "filled/index": "src/filled/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react"],
});
