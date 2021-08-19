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
  title: {
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  edit: {
    backgroundColor: theme.palette.warning.main,
    color: "#fff",
    marginLeft: "1vw",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    },
  },
  delete: {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    marginLeft: "1vw",
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
    },
  },
  progress: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
