import { StrictMode } from 'react';
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider>
  </BrowserRouter>
 
)