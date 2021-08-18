/* eslint-disable */
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "./Post";
import { useStyles } from "./styled";
import { Waypoint } from "react-waypoint";
import { useFilter } from "../../../hooks/useFilter";
import { StoreContext } from "../../../utils/context";
import { IPost } from "../../../types/posts";
import { usePosts } from "../../../hooks/usePosts";

const Index: React.FC = () => {
  const { fetchData, loading, data, loadingMorePosts } = usePosts();
  const { filterValue } = React.useContext(StoreContext);
  const filteredPosts = useFilter(data, filterValue);

  React.useEffect(() => {
    fetchData("/posts");
  }, []);

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={`posts-container ${classes.wrapper}`}
      spacing={2}
    >
      {loading ? <CircularProgress size="100px" /> : null}
      {!loading ? (
        <Typography variant="h3" style={{ width: "100%" }}>
          Latest Episodes
        </Typography>
      ) : null}
      {!loading ? (
        <Grid container spacing={2} className={classes.container}>
          {filteredPosts?.map(
            (
              {
                title,
                fullText,
                postedBy,
                likes,
                description,
                image,
                _id,
                dateCreated,
              },
              index
            ) =>
              index !== filteredPosts.length - 1 ? (
                <Post
                  title={title}
                  postedBy={postedBy}
                  likes={likes}
                  description={description}
                  image={image}
                  _id={_id}
                  key={_id}
                  fullText={fullText}
                  dateCreated={dateCreated}
                />
              ) : (
                <Waypoint key={_id} onEnter={() => loadingMorePosts()}>
                  <div key={_id}></div>
                </Waypoint>
              )
          )}
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
