import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173,
  },
  preview: {
    host: true, // Ensures the preview server is accessible externally
    port: 5173, // Same port as the server
    allowedHosts: ['academai.ru'] // Add your allowed host here
  }
})