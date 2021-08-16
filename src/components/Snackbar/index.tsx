/*eslint-disable*/
import ReactDOM from "react-dom";
import { SnackbarProvider, withSnackbar } from "notistack";

export default {
  success: function (msg: string) {
    this.toast(msg, "success");
  },
  toast: function (msg: string, variant: any) {
    const Display = withSnackbar(({ message, enqueueSnackbar }: any) => {
      enqueueSnackbar(message, { variant });
      return null;
    });
    const mountPoint = document.getElementById("snackbar-helper");
    ReactDOM.render(
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Display message={msg} variant={variant} />
      </SnackbarProvider>,
      mountPoint
    );
  },
};
