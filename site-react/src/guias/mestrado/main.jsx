import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MestradoApp from './MestradoApp.jsx';
import '../../styles.css';
import '../shared/guia.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MestradoApp />
  </StrictMode>,
);
