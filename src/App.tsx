/* eslint-disable */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./config/routes";
import PrivateRoute from "./routes/Private";
import PublicRoute from "./routes/Public";
import { StoreProvider } from "./utils/context";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Header />
          <Switch>
            {routes.map(({ component, exact, path, type }) => {
              if (type === "private") {
                return (
                  <PrivateRoute
                    key={path}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                );
              }
              if (type === "public") {
                return (
                  <PublicRoute
                    key={path}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                );
              }
            })}
          </Switch>
          <Modal />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
