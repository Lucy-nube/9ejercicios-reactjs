import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        ejercicio1: './js_ejercicio_1.html',
        ejercicio2: './js_ejercicio_2.html',
        ejercicio3: './js_ejercicio_3.html',
        ejercicio4: './js_ejercicio_4.html',
        ejercicio5: './js_ejercicio_5.html',
        ejercicio6: './js_ejercicio_6.html',
        ejercicio7: './js_ejercicio_7.html',
        ejercicio8: './js_ejercicio_8.html',
        ejercicio9: './js_ejercicio_9.html'
      }
    }
  }
});
