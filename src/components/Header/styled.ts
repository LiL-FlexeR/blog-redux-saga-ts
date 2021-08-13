import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    backgroundColor: theme.palette.primary.dark,
    height: "10vh",
  },
  title: {
    fontSize: "32px",
    fontWeight: 800,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: ".5%",
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: "90%",
    "&>*": {
      color: "#fff",
      width: "100%",
    },
  },
}));

export default useStyles;
