import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    width: "90%",
    margin: "0 auto",
    flexDirection: "column",
    "&>*": {
      marginTop: "2.5vh",
    },
  },
  button: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    },
  },
  title: {
    textAlign: "center",
  },
}));
