import {
    Badge,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { routes } from '@/routes';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemRemoveAll, openCartModal } from '@/redux/actions/cartActions';
import { logout } from '@/redux/actions/userAction';
function CustomHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpenNavbar, setOpenNavbar] = useState(false);
    const { isLogged, data: currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleNavbar = () => {
        setOpenNavbar(!isOpenNavbar);
    };

    const handleOpenCart = () => {
        console.log('open cart');
        dispatch(openCartModal());
    };

    const handleLogout = () => {
        dispatch(logout());
        dispatch(cartItemRemoveAll());
        navigate(routes.home);
    };

    const menu = [
        {
            title: 'bộ sưu tập',
            path: routes.category.replace(':slug', 'all'),
        },
        {
            title: 'bài viết',
            path: routes.blogs,
        },
        {
            title: 'giới thiệu',
            path: routes.about,
        },
        {
            title: 'dịch vụ',
            path: routes.reservation,
        },
        {
            title: 'liên hệ',
            path: routes.contact,
        },
    ];

    const isHomepage = useLocation().pathname === '/';

    return (
        <header
            className={
                scrolled
                    ? 'fixed inset-x-0 top-0 z-40 border-b border-b-gray-200 bg-white shadow-md'
                    : 'bg-transparent'
            }
        >
            <nav className="px-4 py-2.5 lg:px-6">
                <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between">
                    <Link to={routes.home} className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">
                            Accessories
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 lg:order-2">
                        {isLogged ? (
                            <Menu allowHover>
                                <MenuHandler>
                                    <Button variant="text" className="max-w-[160px]">
                                        <span className="line-clamp-1">{currentUser.name}</span>
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>
                                        <Link to={routes.profile}>
                                            <span>Profile</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to={routes.orders}>
                                            <span>Đơn hàng</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <span onClick={handleLogout}>Đăng xuất</span>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Link to={routes.login}>
                                <Button variant="gradient" color="blue" className="max-w-[160px]">
                                    <span className="line-clamp-1">Đăng nhập</span>
                                </Button>
                            </Link>
                        )}

                        <Badge withBorder content={cartQuantity > 9 ? '9+' : cartQuantity}>
                            <IconButton variant="text" onClick={handleOpenCart}>
                                <ShoppingBagIcon className="h-8 w-8" />
                            </IconButton>
                        </Badge>
                    </div>
                    <div
                        className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row">
                            {menu.map(({ title, path }) => (
                                <li key={path}>
                                    <NavLink to={path}>
                                        {({ isActive }) => (
                                            <Button
                                                variant={isActive ? 'gradient' : 'text'}
                                                className="flex items-center gap-4 rounded-none px-4 uppercase"
                                            >
                                                {title}
                                            </Button>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default CustomHeader;
