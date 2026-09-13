import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
          // Ensures CSS is cleanly optimized and sourcemaps are off for production speed
          sourcemap: false
      }
});
