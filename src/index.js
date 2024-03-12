import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM instead of ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create Redux store with rootReducer
const store = configureStore({
  reducer: rootReducer,
});

// Use ReactDOM.render instead of ReactDOM.createRoot
ReactDOM.render(
  <React.StrictMode>
    {/* Provide Redux store to the entire application */}
    <Provider store={store}>
      {/* Render the App component */}
      <App />
      {/* Render ToastContainer for displaying notifications */}
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  // Mount the application root component to the DOM element with id 'root'
  document.getElementById('root')
);

// Report web vitals
reportWebVitals();
