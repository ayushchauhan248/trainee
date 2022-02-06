import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_TOKEN } from './pages/api/base';
import NotFound from './pages/NotFound';
import { ImSpinner3 } from 'react-icons/im'
import AuthLazy from "./pages/authPages/AuthLazy";
import AppLazy from "./pages/appContainerPages/AppLazy";

interface Props {
}

const App: FC<Props> = () => {
  const token = localStorage.getItem(LS_TOKEN)
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center mt-40">
        <ImSpinner3 className="animate-spin h-20 w-20"></ImSpinner3>
        <div className="text-xl">Please Wait...</div>
      </div>
    }>
      <BrowserRouter>

        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {token ? <Redirect to="/dashboard"></Redirect> : <AuthLazy></AuthLazy>}
          </Route>

          <Route path={["/dashboard", "/recording"]} exact>
            <AppLazy></AppLazy>
          </Route>

          <Route >
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
    </Suspense>

  );
}

export default App;
