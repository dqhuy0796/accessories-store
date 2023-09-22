import PropTypes from "prop-types";
import CustomHeader from "@/components/partials/CustomHeader";
import CustomFooter from "@/components/partials/CustomFooter";
import routes from "@/configs/routes";
import { useLocation } from "react-router-dom";
function MainLayout({ children }) {
    const isHomepage = useLocation().pathname === routes.home;

    return (
        <div className="w-full">
            <CustomHeader />
            <div className="min-h-screen">{children}</div>
            <CustomFooter />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
