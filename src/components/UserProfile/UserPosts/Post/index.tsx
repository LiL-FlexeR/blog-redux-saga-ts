import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { IPost } from "../../../../types/posts";
import { useStyles } from "./styled";
import errorImage from "../../../../assets/png/error.png";
import postImage from "../../../../assets/png/postImage.jpeg";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import { StoreContext } from "../../../../utils/context";

export const Post: React.FC<IPost> = ({
  _id,
  dateCreated,
  description,
  fullText,
  image,
  likes,
  postedBy,
  title,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { showEditPostForm, openModal, postSetter } =
    React.useContext(StoreContext);

  const modalValuesState = {
    _id,
    dateCreated,
    description,
    fullText,
    image,
    likes,
    postedBy,
    title,
  };

  const shoModalHandler = () => {
    openModal();
    showEditPostForm();
    postSetter(modalValuesState);
  };

  return (
    <Grid className={classes.card} item xs={4}>
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
      <Grid
        className={classes.buttonsContainer}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          className={classes.editButton}
          onClick={() => shoModalHandler()}
        >
          Edit Post
        </Button>
        <Button
          className={classes.deleteButton}
          onClick={() => dispatch(AuthActions.removePostAction(_id))}
        >
          Delete Post
        </Button>
      </Grid>
    </Grid>
  );
};
