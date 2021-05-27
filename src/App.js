import Routes from './routes';
import { AuthProvider } from './auth/Authcontext';

function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
}

export default App;
