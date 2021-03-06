/* eslint-disable */
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "./Post";
import { useStyles } from "./styled";
import { Waypoint } from "react-waypoint";
import { useFilter } from "../../../hooks/useFilter";
import { StoreContext } from "../../../utils/context";
import { usePosts } from "../../../hooks/usePosts";
import Skelet from "./Skelet";

const Index: React.FC = () => {
  const { fetchData, loading, data, loadingMorePosts } = usePosts();
  const { setFilter, filteredPosts, filter, filterValue } =
    React.useContext(StoreContext);

  React.useEffect(() => {
    fetchData(`/posts?search=${filter}`);
  }, [filter]);

  React.useEffect(() => {
    setFilter(data);
  }, [fetchData]);

  console.log(filteredPosts);

  const classes = useStyles();

  const loadArr = [1, 2, 3, 4];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={`posts-container ${classes.wrapper}`}
      spacing={2}
    >
      {loading ? <Skelet loadArr={loadArr} /> : null}
      {!loading ? (
        <Typography variant="h3" style={{ width: "100%" }}>
          Latest Episodes
        </Typography>
      ) : null}
      {!loading && filteredPosts ? (
        <Grid container spacing={2} className={classes.container}>
          {filteredPosts.map(
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
                  data={data}
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
