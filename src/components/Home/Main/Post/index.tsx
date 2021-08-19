import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { IPost } from "../../../../types/posts";
import errorImage from "../../../../assets/png/error.png";
import postImage from "../../../../assets/png/postImage.jpeg";
import { useStyles } from "./styled";
import { Link } from "react-router-dom";
import Like from "../../../../assets/svg/Like";
import { StoreContext } from "../../../../utils/context";
import { useSelector } from "react-redux";
import { RootState } from "../../../../types/user";
import { usePosts } from "../../../../hooks/usePosts";

const Post: React.FC<IPost> = ({
  description,
  title,
  image,
  dateCreated,
  _id,
  likes,
  data,
}) => {
  const classes = useStyles();
  const { color } = React.useContext(StoreContext);
  const { likeHandler } = usePosts();
  const currentUser = useSelector((state: RootState) => state.currentUser);

  console.log(likes.length);

  return (
    <Grid className={classes.card} xs={6} item>
      <CardMedia
        className={classes.media}
        image={image ? postImage : errorImage}
      />
      <Typography className={`${classes.text} ${classes.date}`}>
        {dateCreated}
      </Typography>
      <Typography variant="h4" className={classes.text}>
        {title}
      </Typography>
      <Typography className={classes.text}>{description}</Typography>
      <Button onClick={() => likeHandler(currentUser, _id, likes, data)}>
        <Like color={color} />
        {likes.length}
      </Button>
      <Link to={`/posts/${_id}`}>
        <Button className={classes.button}>Read More</Button>
      </Link>
    </Grid>
  );
};

export default Post;
