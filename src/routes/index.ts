import { IoHomeOutline } from "react-icons/io5";
import Dashboard from "../pages/dashboard";
import SignIn from "../pages/login";
import { TypeRoutes } from "./type";

const _routes: Array<TypeRoutes> = [
    {
        name: "Login",
        path: "/login",
        component: SignIn,
        config: {
          permession: "*",
          icon: IoHomeOutline,
          structure: "extraLayout",
          isMenu: true,
        },
        submenu: [],
      },
]

const sidebarRoutes: Array<TypeRoutes> = [
    {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
        config: {
            permession: "*",
            icon: undefined,
            structure: 'layout',
            isMenu: true,
            for_roles: undefined
        }
    }
]


export {_routes, sidebarRoutes}