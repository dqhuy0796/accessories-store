import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
function Register() {
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
                        <Typography variant="h4" color="blue-gray" className="text-2xl">
                            Đăng ký
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal text-sm">
                            Điền thông tin của bạn!
                        </Typography>
                        <form className="mt-[16px] mb-2 w-full ">
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="lg" label="Name" />
                                <Input size="lg" label="Email" />
                                <Input type="password" size="lg" label="Password" />
                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal text-sm]"
                                    >
                                        Tôi đồng ý với các điều khoản!
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button color="blue" className="mt-6 py-[10px] text-xs" fullWidth>
                                Đăng ký
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal text-sm ">
                                Bạn đã có tài khoản!{" "}
                                <a href="#" className="font-medium text-blue-500">
                                    Đăng nhập
                                </a>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Register;
