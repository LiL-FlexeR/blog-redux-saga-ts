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
  },
  date: {
    color: "#c2c2c2",
  },
  button: {
    position: "absolute",
    right: 40,
    bottom: 0,
  },
}));
