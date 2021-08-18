import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styled";
import Skeleton from "@material-ui/lab/Skeleton";

const Skelet = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={`post-container ${classes.container}`}
    >
      <Skeleton variant="rect" width="80%" height="50%" />
      <Skeleton variant="text" width="70%" height=" 10%" />
      <Skeleton variant="text" width="70%" height=" 5%" />
      <Skeleton variant="text" width="70%" height=" 5%" />
      <Grid
        className={classes.utilsContainer}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid className={classes.like}>
          <Skeleton width="100%" height="30px" />
        </Grid>
        <Skeleton variant="text" width="50%" height="30px" />
      </Grid>
      <div className={classes.loading}>
        <CircularProgress size="100px" />
      </div>
    </Grid>
  );
};

export default Skelet;
