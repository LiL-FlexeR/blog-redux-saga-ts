import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  container: {
    height: "75%",
    position: "relative",
    width: "100%",
  },
  utilsContainer: {
    width: "50%",
  },
  like: {
    display: "flex",
    justifyContent: "space-between",
    width: "10%",
    alignItems: "center",
  },
  media: {
    height: "50%",
    width: "80%",
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "70%",
    overflow: "hidden",
    wordBreak: "break-all",
  },
}));
