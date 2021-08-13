import { AppBar, Box, TextField, Toolbar, Typography } from "@material-ui/core";
import Auth from "./Auth";
import useStyles from "./styled";
import Unauth from "./UnAuth";
import SearchIcon from "@material-ui/icons/SearchRounded";
import InputAdornment from "@material-ui/core/InputAdornment";

const Header = () => {
  const token = localStorage.getItem("token");

  const classes = useStyles();

  return (
    <AppBar className={`header-wrapper ${classes.headerWrapper}`}>
      <Toolbar className={`header-container ${classes.headerContainer}`}>
        <Typography className={`title ${classes.title}`}>Blog</Typography>
        <Box className={`text-field-container ${classes.box}`}>
          <TextField
            className={`text-field ${classes.textField}`}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Box>
        {token ? <Auth /> : <Unauth />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
