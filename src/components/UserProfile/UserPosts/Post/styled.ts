import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  media: {
    height: "50%",
    width: "100%",
  },
  card: {
    height: "55vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#f5f5f5",
  },
  text: {
    textAlign: "center",
    marginTop: "2vh",
    wordBreak: "break-word",
  },
  date: {
    color: "#c2c2c2",
  },
  skeletonCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
  },
  button: {
    position: "absolute",
    right: 40,
    bottom: 0,
  },
  buttonsContainer: {
    margin: "2vh auto",
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
  editButton: {
    backgroundColor: theme.palette.warning.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}));
