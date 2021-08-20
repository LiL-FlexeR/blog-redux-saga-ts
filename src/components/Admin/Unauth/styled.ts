import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  image: {
    height: "100vh",
    width: "100%",
  },
  paper: {
    margin: theme.spacing(3),
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
