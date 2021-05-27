import Routes from './routes';
import { AuthProvider } from './auth/Authcontext';
import { Route } from 'react-router';
import { PrivateRoute } from './auth/PrivateRoute';

import Login from './Pages/Login/Login';
import ProviderMarvel from './Context/ProviderMarvel';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
