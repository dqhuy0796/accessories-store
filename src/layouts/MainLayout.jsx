import PropTypes from "prop-types";
import CustomHeader from "@/components/partials/CustomHeader";
import CustomFooter from "@/components/partials/CustomFooter";
import Breadcrumb from "@/components/partials/Breadcrumb";
import "@/styles/MainLayout.css";
function MainLayout({ children }) {
    return (
        <div>
            <CustomHeader />
            <h3>Main Layout</h3>
            <Breadcrumb />
            <div className="container">{children}</div>
            <CustomFooter />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
