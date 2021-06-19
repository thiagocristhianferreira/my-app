import { Route, Switch } from 'react-router';
import { PrivateRoute } from './auth/PrivateRoute';

import Login from './Pages/Login/Login';
import Join from './Pages/Join/Join';
import MarvelComics from './Pages/MarvelComics/MarvelComics';
import MarvelCharacters from './Pages/MarvelCharacters/MarvelCharacters';
import ProviderMarvel from './Context/ProviderMarvel';
import Perfil from './Pages/Perfil/Perfil';
import Favorites from './Pages/Favorites/Favorites';
import NotFound from './Pages/NotFound/NotFound';

function Routes() {
  return (
    <ProviderMarvel>
      <Switch>
        <PrivateRoute path="/favorites" component={ Favorites } />
        <PrivateRoute path="/perfil" component={ Perfil } />
        <PrivateRoute path="/marvelcharacters" component={ MarvelCharacters } />
        <PrivateRoute path="/marvelcomics" component={ MarvelComics } />
        <Route path="/join" component={ Join } />
        <Route exact path="/" component={ Login } />
        <Route component={ NotFound } />
      </Switch>
    </ProviderMarvel>
  );
}
export default Routes;
