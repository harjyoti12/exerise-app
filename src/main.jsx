import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ExerciseProvider } from './Context/ExerciseContext.jsx';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

AOS.init();  // Initialize AOS

ReactDOM.createRoot(document.getElementById('root')).render(
  <ExerciseProvider>
    <App />
  </ExerciseProvider>
);
