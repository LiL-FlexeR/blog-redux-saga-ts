import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./config/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
