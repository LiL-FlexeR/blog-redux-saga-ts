import { Button, Grid, Typography } from "@material-ui/core";
import { StoreContext } from "../../../utils/context";
import { Post } from "./Post";
import { useStyles } from "./styled";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/user";

const UserPosts = ({ loading }: { loading: boolean }) => {
  const classes = useStyles();
  const { openModal, showCreateForm } = React.useContext(StoreContext);
  const showModalHandler = () => {
    openModal();
    showCreateForm();
  };

  const posts = useSelector((state: RootState) => state.posts);

  console.log(posts);

  return (
    <Grid container className={classes.tabContainer}>
      <Typography className={classes.title} variant="h3">
        User Posts
      </Typography>
      <Grid container justifyContent="flex-end">
        <Button className={classes.button} onClick={() => showModalHandler()}>
          Create Post
        </Button>
      </Grid>
      <Grid container spacing={2}>
        {posts?.map(
          ({
            dateCreated,
            description,
            fullText,
            image,
            likes,
            postedBy,
            title,
            _id,
          }) => (
            <Post
              key={_id}
              _id={_id}
              dateCreated={dateCreated}
              description={description}
              fullText={fullText}
              image={image}
              likes={likes}
              postedBy={postedBy}
              title={title}
            />
          )
        )}
      </Grid>
    </Grid>
  );
};

export default UserPosts;
