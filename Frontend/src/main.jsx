import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {store} from "@/store/store.js"
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
