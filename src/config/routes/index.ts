import { IRoute } from "./../../types/routes";
import Home from "../../pages/Home";
import Auth from "../../pages/Admin/Auth";
import Unauth from "../../pages/Admin/Unauth";
import Profile from "../../pages/Profile";
import Post from "../../pages/Post";
import NotFound from "../../pages/NotFound";

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
    component: Unauth,
    exact: true,
  },
  {
    type: "private",
    path: "/admin/:id",
    component: Auth,
    exact: true,
  },
  {
    type: "private",
    path: "/profile/:id",
    component: Profile,
    exact: true,
  },
  {
    type: "public",
    path: "/post/:id",
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
