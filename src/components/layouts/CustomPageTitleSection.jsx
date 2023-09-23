import { Breadcrumbs, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function CustomPageTitleSection({ pathname }) {
    const paths = pathname.split('/').filter((el) => el !== '');

    const displayRoute = (path) => {
        return path;
    };

    return (
        <div className="grid place-items-center py-10 bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)]">
            <Typography as="h3" className="text-2xl font-medium">
                {paths[paths.length - 1]}
            </Typography>
            <Breadcrumbs className="bg-transparent p-0 py-3 transition-all">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Trang chủ
                </Typography>
                {paths.length > 2 &&
                    paths.slice().map((path, index) => (
                        <Link key={index} to={`/${path}`}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal transition-all hover:text-blue-500 hover:underline"
                            >
                                {path}
                            </Typography>
                        </Link>
                    ))}
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {paths[paths.length - 1]}
                </Typography>
            </Breadcrumbs>
        </div>
    );
}

export default CustomPageTitleSection;
