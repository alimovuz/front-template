import { memo, ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { _routes, sidebarRoutes } from ".";
import SignIn from "../pages/login";

const RoutesMiddleware = () => {
    const { isAuthenticated } = useAuth();

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    
    if (isAuthenticated) {
        return <Routes>
            {sidebarRoutes.map((route) => {
                if (route.submenu?.length && route.config.structure === 'layout') {
                    return route.submenu.map((subRoute) => <Route key={subRoute.path} path={subRoute.path} element={createComponent(subRoute.component)}/>
                    )
                }
                return <Route key={route.path} path={route.path} element={createComponent(route.component)}/>
            })}
            <Route path="/" element={<Navigate to={"/dashboard"}/>} />
            <Route path={"*"} element={<Navigate to="/not-found" />} />
        </Routes>
    }

    return <Routes>
        {_routes.map((route) => <Route key={route.path} path={route.path} element={createComponent(route.component)}/>)}
        <Route path="*" element={createComponent(SignIn)} />
    </Routes>
}

const createComponent = (Component: any): ReactNode => {
    return <Component />;
}

export default memo(RoutesMiddleware);