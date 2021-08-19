import { Grid } from "@material-ui/core";
import { useStyles } from "../styled";
import PostSkelet from "./PostSkelet";
import Skeleton from "@material-ui/lab/Skeleton";

const Skelet = ({ loadArr }: { loadArr: number[] }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.skeletonWrapper}>
      <Skeleton variant="rect" width="30%" height="75px" />
      <Grid container spacing={2} className={classes.container}>
        {loadArr.map((post: number) => (
          <PostSkelet key={post} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Skelet;
