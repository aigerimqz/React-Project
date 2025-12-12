import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppInitializer from './AppInitializer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import {store} from "./store.js";
import i18n from './i18n.js';
import { I18nProvider } from './context/I18nContext.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <I18nProvider>
          <AppInitializer/>
          <App />
        </I18nProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
)
