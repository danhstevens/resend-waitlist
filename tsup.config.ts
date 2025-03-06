import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/server.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,

  // Tells tsup to inject any imported CSS as <style> tags at runtime:
  injectStyle: true,

  external: ['react', 'react-dom']
});