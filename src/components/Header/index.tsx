/* eslint-disable */
import { AppBar, Box, TextField, Toolbar, Typography } from "@material-ui/core";
import AuthButtons from "./Auth";
import useStyles from "./styled";
import UnauthButtons from "./UnAuth";
import SearchIcon from "@material-ui/icons/SearchRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../redux/actions";
import { scroller } from "react-scroll";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import { StoreContext } from "../../utils/context";
import { RootState } from "../../types/user";
import { useLocation } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";

const SearchTextField = (props: any) => {
  return (
    <TextField
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
};

const Header = () => {
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { filterValue } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (token) {
      dispatch(AuthActions.authUserAction(token));
    }
  }, []);

  const scrollToPosts = () => {
    scroller.scrollTo("posts-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return location.pathname !== "/admin" ? (
    <AppBar className={`header-wrapper ${classes.headerWrapper}`}>
      <Toolbar className={`header-container ${classes.headerContainer}`}>
        <Typography className={`title ${classes.title}`}>Blog</Typography>
        {location.pathname === "/" ? (
          <Box className={`text-field-container ${classes.box}`}>
            <DebounceInput
              debounceTimeout={2000}
              element={SearchTextField}
              onFocus={scrollToPosts}
              className={classes.textField}
              onChange={(e) => filterValue(`${e.target.value}`)}
            />
          </Box>
        ) : null}
        {currentUser._id ? <AuthButtons /> : <UnauthButtons />}
      </Toolbar>
    </AppBar>
  ) : null;
};

export default Header;
