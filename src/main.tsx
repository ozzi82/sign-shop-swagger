import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import App from './App.tsx'
import './index.css'

console.log("Starting app...");
createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <App />
  </ThemeProvider>
);
