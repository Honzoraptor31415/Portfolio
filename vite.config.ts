import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    REACT_APP_SUPABASE_APP_URL: process.env.REACT_APP_SUPABASE_APP_URL,
    REACT_APP_SUPABASE_APP_ANON_KEY: process.env.REACT_APP_SUPABASE_APP_ANON_KEY,
    REACT_APP_TEST_ENV: process.env.REACT_APP_TEST_ENV
  },
})
