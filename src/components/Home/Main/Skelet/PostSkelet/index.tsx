import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "../../Post/styled";

const PostSkelet = () => {
  const classes = useStyles();

  return (
    <Grid item xs={6} className={classes.skeletonCard}>
      <Skeleton variant="rect" width="100%" height="50%" />
      <Skeleton variant="text" width="80%" height="7.5%" />
      <Skeleton variant="text" width="90%" height="15%" />
      <Skeleton variant="text" width="80%" height="10%" />
      <Skeleton
        className={classes.button}
        variant="rect"
        width="20%"
        height="5%"
      />
    </Grid>
  );
};

export default PostSkelet;
