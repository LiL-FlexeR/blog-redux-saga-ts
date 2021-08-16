import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "./Post";
import { useStyles } from "./styled";
import { Waypoint } from "react-waypoint";
import { useFilter } from "../../../hooks/useFilter";
import { StoreContext } from "../../../utils/context";
import { IPost } from "../../../types/posts";
import { useQuery } from "../../../hooks/useQuery";

const Index: React.FC = () => {
  const [fetchData, loading, data] = useQuery<IPost[]>();
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
            ) => (
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
            )
          )}
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
