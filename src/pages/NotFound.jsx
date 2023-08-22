import { Link } from "react-router-dom";
import routes from "../configs/routes";

function NotFound() {
    return (
        <div>
            <h3>Khong tim thay trang</h3>
            <Link to={routes.home}>Tro ve ne</Link>
        </div>
    );
}

export default NotFound;
