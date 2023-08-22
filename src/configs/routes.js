const routes = {
    home: "/",
    collections: "/collection/all",
    category: "/collection/:category",
    reservation: "/reservation",
    about: "/about",
    blogs: "/blog/all",
    blogDetails: "/blog/:blog_id",
    contact: "/contact",
    register: "/register",
    login: "/login",
    // private (only valid when logged in)
    profile: "/profile",
    profileUpdate: "/profile/update",
    address: "/address/all",
    addressCreate: "/address/create",
    addressUpdate: "/address/update/:address_id",
    orders: "/order/all",
    orderDetails: "/order/:order_uuid",
    checkout: "/checkout",
};

export default routes;
