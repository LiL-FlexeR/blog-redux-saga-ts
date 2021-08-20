import { CardMedia, Grid, makeStyles, Paper } from "@material-ui/core";
import FormImage from "../../../assets/png/first-screen-bcg.png";
import UnauthComponent from "../../../components/Admin/Unauth";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
  },
  image: {
    height: "100vh",
    width: "100%",
  },
  paper: {
    margin: theme.spacing(8, 4),
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

const Unauth = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={6} sm={4} md={7} className={classes.image}>
        <CardMedia image={FormImage} className={classes.image} />
      </Grid>
      <Grid
        container
        style={{ width: "50%" }}
        alignItems="center"
        component={Paper}
        elevation={6}
        square
      >
        <UnauthComponent />
      </Grid>
    </Grid>
  );
};

export default Unauth;
