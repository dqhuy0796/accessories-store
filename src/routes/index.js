import routes from "../configs/routes";
// layout
import { Fragment } from "react";
import MainLayout from "../layouts/MainLayout";
import Collection from "../layouts/Collection";
//page
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import productDetail from "../pages/productDetail";
import NotFound from "../pages/NotFound";
//private
import Profile from "../pages/Profile";

export const publicRoutes = [
    {
        Layout: MainLayout,
        Component: Home,
        path: routes.home,
    },
    {
        Layout: MainLayout,
        Component: Collection,
        path: routes.collections,
    },
    {
        Layout: MainLayout,
        Component: About,
        path: routes.about,
    },
    {
        Layout: MainLayout,
        Component: Blogs,
        path: routes.blogs,
    },
    {
        Layout: MainLayout,
        Component: Contact,
        path: routes.contact,
    },
    {
        Layout: MainLayout,
        Component: Cart,
        path: routes.cart,
    },
    {
        Layout: MainLayout,
        Component: Reservation,
        path: routes.reservation,
    },
    {
        Layout: MainLayout,
        Component: productDetail,
        path: routes.productDetail,
    },
    {
        Layout: Fragment,
        Component: Login,
        path: routes.login,
    },
    {
        Layout: Fragment,
        Component: Register,
        path: routes.register,
    },
    {
        Layout: Fragment,
        Component: NotFound,
        path: "*",
    },
];
export const privateRoutes = [
    {
        Layout: MainLayout,
        Component: Profile,
        path: routes.profile,
    },
];
