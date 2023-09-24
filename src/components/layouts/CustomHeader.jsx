import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Badge,
    Button,
    Drawer,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { cartItemRemoveAll, openCartModal } from '@/redux/actions/cartActions';
import { logout } from '@/redux/actions/authAction';
import { routes } from '@/routes';
import { Bars3Icon, PlusSmallIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import CustomBagdeNotification from '../shared/CutomBagdeNotification';
function CustomHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpenNavbar, setOpenNavbar] = useState(false);
    const { isLogged, data: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [openAccordion, setOpenAccordion] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

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
                scrolled ? 'fixed inset-x-0 top-0 z-40 border-b border-b-gray-200 bg-white shadow-md' : 'bg-transparent'
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
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Accessories</span>
                    </Link>
                    <div className="flex items-center gap-4 lg:order-2">
                        <div className="hidden lg:block">
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
                                    <Button variant="gradient" color="blue" className="hidden max-w-[160px] lg:block">
                                        <span className="line-clamp-1">Đăng nhập</span>
                                    </Button>
                                </Link>
                            )}
                        </div>

                        <CustomBagdeNotification notification={cartQuantity > 9 ? '9+' : cartQuantity}>
                            <IconButton variant="text" onClick={handleOpenCart}>
                                <ShoppingBagIcon className="h-8 w-8" />
                            </IconButton>
                        </CustomBagdeNotification>

                        <IconButton variant="text" onClick={openDrawer} className="lg:hidden">
                            <Bars3Icon className="h-8 w-8" />
                        </IconButton>
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
                    <div className="w-full items-center justify-between lg:hidden">
                        <Drawer
                            placement="left"
                            open={open}
                            onClose={closeDrawer}
                            size={480}
                            className="flex flex-col p-4"
                        >
                            <div className="-mr-3 flex shrink-0 items-center justify-between">
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
                                <IconButton variant="text" onClick={closeDrawer}>
                                    <XMarkIcon className="h-5 w-5" strokeWidth={2} />
                                </IconButton>
                            </div>

                            <ul className="mt-4 flex-1 flex flex-col font-medium lg:mt-0 lg:flex-row">
                                {menu.map(({ title, path }) => (
                                    <li key={path} className="border-b border-b-blue-gray-100">
                                        <NavLink
                                            to={path}
                                            onClick={() => {
                                                closeDrawer();
                                                navigate(path);
                                            }}
                                        >
                                            {({ isActive }) => (
                                                <Button fullWidth variant="text" className="flex">
                                                    {title}
                                                </Button>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="mt-auto">
                                    {isLogged ? (
                                        <Accordion open={openAccordion} icon={<PlusSmallIcon className="h-4 w-4" />}>
                                            <AccordionHeader
                                                className="py-0"
                                                onClick={() => setOpenAccordion((prevState) => !prevState)}
                                            >
                                                <div className="flex text-xs font-bold px-6 py-3">
                                                    {currentUser.name}
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody className="pt-0 text-sm font-normal">
                                                <div className="border-b border-b-blue-gray-100">
                                                    <Button fullWidth variant="text" className='flex'>
                                                        profile
                                                    </Button>
                                                </div>
                                                <div className="border-b border-b-blue-gray-100">
                                                    <Button fullWidth variant="text" className='flex'>
                                                        Đơn hàng
                                                    </Button>
                                                </div>
                                                <div className="border-b border-b-blue-gray-100">
                                                    <Button fullWidth variant="text" className='flex'>
                                                        Đăng xuất
                                                    </Button>
                                                </div>
                                            </AccordionBody>
                                        </Accordion>
                                    ) : (
                                        <Link to={routes.login}>
                                            <Button variant="gradient" color="blue" fullWidth>
                                                <span className="line-clamp-1">Đăng nhập</span>
                                            </Button>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </Drawer>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default CustomHeader;
