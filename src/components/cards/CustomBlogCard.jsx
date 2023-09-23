import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    Tooltip,
    Typography,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function CustomBlogCard({ data }) {
    const { img, title, description, tag, route } = data;
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mt-0 mb-4 h-64 xl:h-40">
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody className="py-0 px-1">
                <Chip className="w-max text-[10px] capitalize" size="sm" value={tag} />

                <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                    {title}
                </Typography>
                <Typography variant="small" className="font-medium text-gray-500">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                <Link to={route}>
                    <Button variant="gradient" color="white">
                        Xem thêm
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

CustomBlogCard.defaultProps = {
    data: {
        img: 'https://www.junie.vn/cdn/shop/files/day-chuyen.jpg?v=1684540701&width=500',
        title: 'Giá dây chuyền vàng tây nữ có đắt không? Bao nhiêu tiền một chỉ?',
        description: 'https://www.junie.vn/cdn/shop/files/day-chuyen.jpg?v=1684540701&width=500',
        route: '/collection/necklace',
        tag: 'day chuyen',
    },
};

CustomBlogCard.propTypes = {
    data: PropTypes.object,
    onPreview: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
};

export default CustomBlogCard;
