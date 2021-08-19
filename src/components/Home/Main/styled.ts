import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    width: "90%",
    margin: "5vh auto",
  },
  container: {
    width: "95%",
    height: "100%",
    flexGrow: 1,
    margin: "0 auto",
    marginTop: "5vh",
  },
  skeletonWrapper: {
    height: "100vh",
    width: "95%",
    margin: "0 auto",
  },
}));
