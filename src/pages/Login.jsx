import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import routes from "@/configs/routes";

function Login() {

  

    return (
        <div className="h-screen grid md:grid-cols-2">
                <div className="h-full hidden md:block">
                    <img
                        className="h-full object-cover object-left"
                        src="//www.junie.vn/cdn/shop/files/NonSale_HP_Hero_5-16_5-23_Desktop.jpg?v=1684537968&width=3000"
                    />
                </div>
            <div className="h-full grid place-items-center">
                <div className="grid grid-cols-1 place-content-center">
                    <div className="">
                        <h1 className="text-center text-2xl mb-[16px]">ACCESSORIES STORE</h1>
                    </div>
                    <Card color="transparent" shadow={false} className="w-full">
                        <Typography variant="h4" color="blue-gray" className="text-xl">
                            Đăng nhập
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal text-sm">
                            Điền email và mật khẩu để đăng nhập!
                        </Typography>
                        <form className="mt-[16px] mb-2 w-full ">
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="lg" label="Email" className="text-base py-3" />
                                <Input type="password" size="lg" label="Password" />
                            </div>
                            <Button color="blue" className="mt-6 py-[10px] text-xs" fullWidth>
                                Đăng nhập
                            </Button>
                            <Typography color="gray" className="mt-4 text-center text-sm font-normal">
                                Bạn chưa có tài khoản!{" "}
                                <Link to={routes.register} className="font-medium text-blue-500">
                                    Đăng ký
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;
