import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import Post from "./Post";
import { useStyles } from "./styled";
import { Waypoint } from "react-waypoint";
import { useFilter } from "../../../hooks/useFilter";
import { StoreContext } from "../../../utils/context";
import { IPost } from "../../../types/posts";

const Index: React.FC = () => {
  const { data, loading, loadMoreHandler } = useFetchPosts<IPost[]>();
  const { filterValue } = React.useContext(StoreContext);
  const filteredPosts = useFilter(data, filterValue);

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={`posts-container ${classes.wrapper}`}
      spacing={2}
    >
      {loading ? <CircularProgress /> : null}
      {!loading ? <Typography variant="h3">Latest Episodes</Typography> : null}
      {!loading ? (
        <Grid container spacing={2} className={classes.container}>
          {filteredPosts?.map(
            (
              { title, postedBy, likes, description, image, _id, dateCreated },
              index
            ) =>
              index !== data.length - 1 ? (
                <Post
                  title={title}
                  postedBy={postedBy}
                  likes={likes}
                  description={description}
                  image={image}
                  _id={_id}
                  key={_id}
                  dateCreated={dateCreated}
                />
              ) : (
                <Waypoint key={_id} onEnter={() => loadMoreHandler()}>
                  <div key={_id}>
                    <Post
                      title={title}
                      postedBy={postedBy}
                      likes={likes}
                      description={description}
                      image={image}
                      _id={_id}
                      key={_id}
                      dateCreated={dateCreated}
                    />
                  </div>
                </Waypoint>
              )
          )}
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
