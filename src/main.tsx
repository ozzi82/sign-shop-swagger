import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TinaWrapper } from './components/TinaProvider.tsx'

console.log("Starting app...");
createRoot(document.getElementById("root")!).render(
  <div className="dark">
    <TinaWrapper>
      <App />
    </TinaWrapper>
  </div>
);
