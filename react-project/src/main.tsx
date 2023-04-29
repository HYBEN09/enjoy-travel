import App from './App';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
