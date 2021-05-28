import Routes from './routes';
import ProviderMarvel from './Context/ProviderMarvel';
import { AuthProvider } from './auth/Authcontext';

function App() {
  return (
    <AuthProvider>
      <ProviderMarvel>
        <Routes />
      </ProviderMarvel>
    </AuthProvider>
  );
}

export default App;