/* eslint-disable */
import { Grid, Tab, Tabs } from "@material-ui/core";
import React, { useMemo } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePosts } from "../../hooks/usePosts";
import { AuthActions } from "../../redux/actions";
import { IPost } from "../../types/posts";
import { RootState } from "../../types/user";
import { useStyles } from "./styled";
import UserData from "./UserData";
import UserPosts from "./UserPosts";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: "80%" }}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserProfile = () => {
  const [value, setValue] = React.useState(0);

  const currentUser = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentUser._id) {
      console.log("useEffect");
      dispatch(AuthActions.loadPostsAction(currentUser._id));
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const { fetchData, data, loading } = usePosts();

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
          indicatorColor="primary"
        >
          <Tab label="Data" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
        </Tabs>
      </Grid>
      <TabPanel value={value} index={0}>
        <UserData loading={loading} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserPosts loading={loading} />
      </TabPanel>
    </Grid>
  );
};

export default UserProfile;
