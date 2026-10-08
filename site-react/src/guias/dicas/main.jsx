import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DicasApp from './DicasApp.jsx';
import '../../styles.css';
import './dicas.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DicasApp />
  </StrictMode>,
);
