import {
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { IPost } from "../../types/posts";
import { useStyles } from "./styled";

const Index = () => {
  const params: any = useParams();
  const [fetchData, loading, data] = useQuery<IPost>();

  React.useEffect(() => {
    fetchData(`/posts/${params.id}`);
  }, []);

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
          <Typography>{data?.title}</Typography>
          <Typography variant="h4">{data?.description}</Typography>
          <Typography>{data?.likes.length}</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
