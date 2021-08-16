/* eslint-disable */
import { AppBar, Box, TextField, Toolbar, Typography } from "@material-ui/core";
import AuthButtons from "./Auth";
import useStyles from "./styled";
import UnauthButtons from "./UnAuth";
import SearchIcon from "@material-ui/icons/SearchRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../redux/actions";
import { scroller } from "react-scroll";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import { StoreContext } from "../../utils/context";

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
  const currentUser = useSelector((state: RootStateOrAny) => {
    return state.currentUser;
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { setFilter } = React.useContext(StoreContext);

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

  return (
    <AppBar className={`header-wrapper ${classes.headerWrapper}`}>
      <Toolbar className={`header-container ${classes.headerContainer}`}>
        <Typography className={`title ${classes.title}`}>Blog</Typography>
        <Box className={`text-field-container ${classes.box}`}>
          <DebounceInput
            debounceTimeout={2000}
            element={SearchTextField}
            onFocus={scrollToPosts}
            className={classes.textField}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Box>
        {currentUser._id ? <AuthButtons /> : <UnauthButtons />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
