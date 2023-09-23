import CustomAddressSelection from '@/components/partials/CustomAddressSelection';
import { login } from '@/redux/actions/userAction';
import { routes } from '@/routes';
import { authService } from '@/services';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Checkbox,
    Input,
    Spinner,
    Typography,
} from '@material-tailwind/react';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [isLoading, setLoading] = useState(false);
    const [isLoginable, setLoginable] = useState(false);
    const [message, setMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleToggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleOnChange = (key, value) => {
        setUserData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);
        handleRegister(username, password);
    };

    const handleRegister = async (username, password) => {
        // try {
        //     setLoading(true);
        //     const response = await authService.loginService(username, password);
        //     if (response) {
        //         const { code, message: resMessage, result, accessToken, refreshToken } = response;
        //         if (code === 'SUCCESS') {
        //             dispatch(
        //                 login({
        //                     user: result,
        //                     accessToken,
        //                     refreshToken,
        //                 }),
        //             );
        //             navigate(-1);
        //         } else {
        //             setMessage(resMessage);
        //         }
        //     }
        // } catch (error) {
        //     console.log(error);
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        if (!_.isEmpty(username) && !_.isEmpty(password)) {
            setLoginable(true);
        } else {
            setLoginable(false);
        }
    }, [username, password]);

    const contents = [
        {
            key: 'phone_number',
            label: 'Số điện thoại',
            type: 'tel',
            require: true,
        },
        {
            key: 'email',
            label: 'Email',
            type: 'email',
            require: true,
        },
        {
            key: 'password',
            label: 'Mật khẩu',
            type: 'password',
            require: true,
        },

        {
            key: 'confirm_password',
            label: 'Xác nhận mật khẩu',
            type: 'password',
            require: true,
        },
        {
            key: 'name',
            label: 'Tên bạn là gì?',
            type: 'text',
            require: true,
        },
    ];

    return (
        <div className="grid min-h-screen md:grid-cols-2">
            <img
                src="https://www.junie.vn/cdn/shop/files/NonSale_HP_Hero_5-16_5-23_Desktop.jpg?v=1684537968&width=3000"
                className="absolute inset-0 -z-10 h-full object-cover object-left"
            />
            <div></div>
            <div className="grid h-full w-full place-items-center bg-white">
                <Card className="shadow-none">
                    <form action="#" onSubmit={handleSubmit}>
                        <CardBody>
                            <div className="grid max-w-sm gap-4">
                                <Typography variant="h5" className="text-center">
                                    Đăng ký
                                </Typography>

                                {message && (
                                    <Typography className="animation-float text-sm font-medium text-red-700">
                                        {message}
                                    </Typography>
                                )}

                                {contents.map((item, index) =>
                                    item.type === 'password' ? (
                                        <Input
                                            key={item.key}
                                            size="lg"
                                            label={item.label}
                                            value={userData[item.key] ?? ''}
                                            type={showPassword ? 'text' : 'password'}
                                            onChange={(e) =>
                                                handleOnChange(item.key, e.target.value)
                                            }
                                            icon={
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={handleToggleShowPassword}
                                                >
                                                    {showPassword ? (
                                                        <EyeIcon className="h-5 w-5" />
                                                    ) : (
                                                        <EyeSlashIcon className="h-5 w-5" />
                                                    )}
                                                </div>
                                            }
                                        />
                                    ) : (
                                        <Input
                                            key={item.key}
                                            size="lg"
                                            type={item.type}
                                            label={item.label}
                                            value={userData[item.key] ?? ''}
                                            onChange={(e) =>
                                                handleOnChange(item.key, e.target.value)
                                            }
                                        />
                                    ),
                                )}

                                <CustomAddressSelection
                                    address={userData.address ?? {}}
                                    onChange={handleOnChange}
                                />

                                <Checkbox
                                    label={
                                        <Typography className="text-sm font-medium">
                                            Đồng ý với đ.kiện và đ.khoản sử dụng
                                        </Typography>
                                    }
                                />
                            </div>
                        </CardBody>
                        <CardFooter className="grid gap-4 pt-0">
                            <Button
                                type="submit"
                                variant="gradient"
                                className="flex items-center justify-center gap-2"
                                disabled={!isLoginable || isLoading}
                                fullWidth
                            >
                                {isLoading && <Spinner className="h-5 w-5" />}
                                Đăng ký
                            </Button>
                            <div color="blue" className="flex items-center justify-center gap-2 ">
                                <Typography className="text-sm">Đã có tài khoản?</Typography>
                                <Link to={routes.login}>
                                    <Typography color="blue" className="text-sm font-medium">
                                        Đăng nhập
                                    </Typography>
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Register;
