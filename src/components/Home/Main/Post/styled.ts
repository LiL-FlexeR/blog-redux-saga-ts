import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  media: {
    height: "50%",
    width: "100%",
  },
  card: {
    height: "50vh",
    overflow: "hidden",
    position: "relative",
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
}));
