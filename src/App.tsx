import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './pages/appContainerPages/AppRoute';
import AuthRoute from './pages/authPages/AuthRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>

        <Route path={["/login", "/signup"]} exact>
          <AuthRoute></AuthRoute>
        </Route>

        <Route path={["/dashboard", "/recording"]} exact>
          <AppRoute></AppRoute>
        </Route>

        <Route >
          <NotFound></NotFound>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
