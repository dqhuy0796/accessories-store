import { Link } from "react-router-dom";
import routes from "../configs/routes";

function NotFound() {
    return (
        <div className="">
            <Link to={routes.home}>go back</Link>
        </div>
    );
}

export default NotFound;
