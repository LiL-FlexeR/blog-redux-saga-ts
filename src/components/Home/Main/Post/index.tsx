import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { IPost } from "../../../../types/posts";
import errorImage from "../../../../assets/png/error.png";
import postImage from "../../../../assets/png/postImage.jpeg";
import { useStyles } from "./styled";
import { Link } from "react-router-dom";

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
      <Link to={`/posts/${_id}`}>
        <Button className={classes.button}>Read More</Button>
      </Link>
    </Grid>
  );
};

export default Post;
