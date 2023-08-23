import PropTypes from "prop-types";
import CustomHeader from "@/components/partials/CustomHeader";
import CustomFooter from "@/components/partials/CustomFooter";
import Breadcrumb from "@/components/partials/Breadcrumb";
import routes from "@/configs/routes";
import "@/styles/MainLayout.css";
import { useLocation } from "react-router-dom";
function MainLayout({ children }) {
    const isHomepage = useLocation().pathname === routes.home;

    return (
        <div>
            <CustomHeader />
            {!isHomepage && <Breadcrumb />}
            <div className="container">{children}</div>
            <CustomFooter />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
