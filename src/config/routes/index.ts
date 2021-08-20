import { IRoute } from "./../../types/routes";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Post from "../../pages/Post";
import NotFound from "../../pages/NotFound";
import Admin from "../../pages/Admin";
import AuthComponent from "../../components/Admin/Auth";

export const routes: IRoute[] = [
  {
    type: "public",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    type: "public",
    path: "/admin",
    component: Admin,
    exact: true,
  },
  {
    type: "private",
    path: "/admin/:id",
    component: AuthComponent,
    exact: true,
  },
  {
    type: "private",
    path: "/users/:id",
    component: Profile,
    exact: true,
  },
  {
    type: "public",
    path: "/posts/:id",
    component: Post,
    exact: true,
  },
  {
    type: "public",
    path: "/404",
    component: NotFound,
    exact: true,
  },
];
