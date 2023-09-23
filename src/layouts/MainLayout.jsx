import CartModal from '@/components/layouts/CartModal';
import CustomCarouseService from '@/components/layouts/CustomCarouseService';
import CustomFooter from '@/components/layouts/CustomFooter';
import CustomHeader from '@/components/layouts/CustomHeader';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
function MainLayout({ children }) {
    const isHomepage = useLocation().pathname === '/';

    return (
        <div className="w-full">
            <CustomHeader />
            <div className="min-h-screen">{children}</div>
            <CustomCarouseService/>
            <CustomFooter />
            <CartModal />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
