import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { FirebaseContext } from './context/Firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext>
    <App />
    </FirebaseContext>
  </React.StrictMode>,
)
