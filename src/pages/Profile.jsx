import CustomProfileInfoCard from '@/components/cards//CustomProfileInfoCard';
import { routes } from '@/routes';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Avatar, Card, CardBody, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Profile() {
    const user = useSelector((state) => state.user.data);

    return (
        <>
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
                <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
            </div>
            <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
                <CardBody className="p-4">
                    <div className="mb-10 grid gap-6">
                        <div className="flex items-center gap-6">
                            <div className="group relative overflow-hidden rounded-full">
                                <Avatar
                                    src={
                                        user?.avatar.secure_url
                                            ? user?.avatar.secure_url
                                            : '/img/default-avatar.jpg'
                                    }
                                    alt={user?.name}
                                    size="xxl"
                                    withBorder={true}
                                    color="green"
                                    className="rounded-lg p-0.5 shadow-lg shadow-blue-gray-500/40"
                                />

                                <div className="absolute left-0 right-0 bottom-0 grid h-1/3 translate-y-full cursor-pointer place-items-center bg-gray-500/50 transition-transform duration-300 group-hover:translate-y-0">
                                    <PencilIcon className="h-4 w-4 text-white" />
                                </div>
                            </div>
                            <div>
                                <Typography variant="small" className="font-normal">
                                    Hi,
                                </Typography>
                                <Typography variant="h5" className="mb-1 flex items-center gap-2">
                                    {user?.name}
                                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-green-300 to-green-600 shadow-all shadow-green-200"></span>
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <CustomProfileInfoCard
                        data={user}
                        action={
                            <Tooltip content="Chỉnh sửa">
                                <Link to={routes.profileUpdate}>
                                    <IconButton size="sm" variant="gradient" color="blue">
                                        <PencilIcon className="h-4 w-4" />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        }
                    />
                </CardBody>
            </Card>
        </>
    );
}

export default Profile;
