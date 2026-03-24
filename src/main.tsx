import { ViteReactSSG } from 'vite-react-ssg'
import { HelmetProvider } from 'react-helmet-async'
import App from './app/App.tsx'
import './styles/index.css'

// ViteReactSSG handles the hydrateRoot vs createRoot logic for you.
// It will use 'hydrateRoot' in production (after pre-rendering) 
// and 'createRoot' during local development.
export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
