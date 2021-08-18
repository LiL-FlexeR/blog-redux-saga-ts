/* eslint-disable */
import {
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import errorImage from "../../assets/png/error.png";
import postImage from "../../assets/png/postImage.jpeg";
import Like from "../../assets/svg/Like";
import Skelet from "./Skeleton";
import { IParams } from "../../types/URLParams";
import { useSelector } from "react-redux";
import { useStyles } from "./styled";
import { StoreContext } from "../../utils/context";
import { RootState } from "../../types/user";

const Index = () => {
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
  const { color, colorSetter } = React.useContext(StoreContext);
  const params: IParams = useParams();
  const { fetchData, loading, data, likeHandler } = usePost();

  React.useEffect(() => {
    fetchData(`/posts/${params.id}`);
  }, []);

  React.useEffect(() => {
    if (data?.likes.includes(currentUser._id)) {
      colorSetter("red");
    } else {
      colorSetter("#000");
    }
  }, [fetchData]);

  const classes = useStyles();

  return (
    <Grid
      className={`post-wrapper ${classes.wrapper}`}
      container
      justifyContent="center"
      alignItems="center"
    >
      {loading ? <Skelet /> : null}
      {!loading ? (
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          className={`post-container ${classes.container}`}
        >
          <CardMedia
            className={classes.media}
            image={data?.image ? postImage : errorImage}
          />
          <Typography variant="h2" className={classes.text}>
            {data?.title}
          </Typography>
          <Typography variant="h4" className={classes.text}>
            {data?.description}
          </Typography>
          <Typography variant="h5" className={classes.text}>
            {data?.fullText}
          </Typography>
          <Grid
            className={classes.utilsContainer}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => likeHandler(currentUser)}
              className={classes.like}
            >
              {data?.likes?.length}
              <Like color={color} />
            </Button>
            <Typography>{data?.dateCreated}</Typography>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Index;
