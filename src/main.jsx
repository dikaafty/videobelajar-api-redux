import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { courseStore } from './store/redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={courseStore}>
      <App />
    </Provider>
  </StrictMode>,
)
