import {
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../../hooks/useFetchPost";
import { IPost } from "../../types/posts";
import { useStyles } from "./styled";

const Index = () => {
  const params: any = useParams();
  const { loading, data } = useFetchPost<IPost | undefined>(params.id);
  console.log(data);

  const classes = useStyles();

  return (
    <Grid
      className={`post-wrapper ${classes.wrapper}`}
      container
      justifyContent="center"
      alignItems="center"
    >
      {loading ? <CircularProgress size="100px" /> : null}
      {!loading ? (
        <Grid container className={`post-container ${classes.container}`}>
          <CardMedia />
          <Typography></Typography>
          <Typography variant="h4"></Typography>
          <Typography></Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
