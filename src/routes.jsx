// layout
import { Fragment } from 'react';
import MainLayout from '@/layouts/MainLayout';
//page
import About from '@/pages/About';
import Blogs from '@/pages/Blogs';
import Cart from '@/pages/Cart';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import Reservation from '@/pages/Reservation';
import ProductDetails from '@/pages/ProductDetails';
//private
import Profile from '@/pages/Profile';
import ProfileUpdate from '@/pages/ProfileUpdate';
import Checkout from './pages/Checkout';

export const routes = {
    home: '/',
    collections: '/collection/all',
    category: '/collection/:slug',
    reservation: '/reservation',
    about: '/about',
    blogs: '/blog/all',
    blogDetails: '/blog/:id',
    contact: '/contact',
    register: '/register',
    login: '/login',
    cart: '/cart',
    productDetail: '/productDetail/:slug',
    // private (only valid when logged in)
    profile: '/profile',
    profileUpdate: '/profile/update',
    address: '/address/all',
    addressCreate: '/address/create',
    addressUpdate: '/address/update/:id',
    orders: '/order/all',
    orderDetails: '/order/:order_uuid',
    checkout: '/checkout',
};

export const publicRoutes = [
    {
        Layout: MainLayout,
        Component: Home,
        path: routes.home,
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
        Component: Checkout,
        path: routes.checkout,
    },
    {
        Layout: MainLayout,
        Component: Reservation,
        path: routes.reservation,
    },
    {
        Layout: MainLayout,
        Component: ProductDetails,
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
        path: '*',
    },
];
export const privateRoutes = [
    {
        Layout: MainLayout,
        Component: Profile,
        path: routes.profile,
    },
    {
        Layout: MainLayout,
        Component: ProfileUpdate,
        path: routes.profileUpdate,
    },
];
