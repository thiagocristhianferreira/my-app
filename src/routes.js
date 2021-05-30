import { Route } from 'react-router';
import { PrivateRoute } from './auth/PrivateRoute';
import Login from './Pages/Login/Login';
import Join from './Pages/Join/Join';
import MarvelComics from './Pages/MarvelComics/MarvelComics';
import MarvelCharacters from './Pages/MarvelCharacters/MarvelCharacters';
import ProviderMarvel from './Context/ProviderMarvel';
import Perfil from './Pages/Perfil/Perfil';
import Favorites from './Pages/Favorites/Favorites';


function Routes() {
  return (
    <ProviderMarvel>
      <Route path="/join" component={ Join } />
      <PrivateRoute path="/favorites" component={ Favorites } />
      <PrivateRoute path="/perfil" component={ Perfil } />
      <PrivateRoute path="/marvelcharacters" component={ MarvelCharacters } />
      <PrivateRoute path="/marvelcomics" component={ MarvelComics } />
      <Route exact path="/" component={ Login } />
    </ProviderMarvel>
  );
}
export default Routes;