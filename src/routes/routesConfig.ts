import Home from "../pages/home/Home";
import SignIn from "../pages/sighIn/SignIn";

import { TRoutesConfig } from "./routes.types";

export const routesConfig: TRoutesConfig = {
  login: {
    path: "/",
    component: SignIn,
  },
  home: {
    path: "/home",
    component: Home,
  },
};
