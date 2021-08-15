import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstScreenWrapper: {
    width: "100%",
    height: "100vh",
    padding: 0,
    overflow: "hidden",
    margin: 0,
    maxWidth: "auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  bcg: {
    zIndex: -10,
    position: "absolute",
    top: 0,
    left: 0,
    [theme.breakpoints.between("laptop", "desktop")]: {
      height: "100%",
    },
  },
  title: {
    color: "#fff",
    [theme.breakpoints.up("laptop")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.up("tablet")]: {
      fontSize: "30px",
    },
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: "#fff",
    marginTop: "20px",
    fontSize: "18px",
    padding: "7.5px 25px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
