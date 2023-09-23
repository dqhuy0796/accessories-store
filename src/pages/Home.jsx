import CustomBlogsSection from '@/components/layouts/CustomBlogsSection';
import CustomCategoryNavigation from '@/components/layouts/CustomCategoryNavigation';
import CustomDiscoverSection from '@/components/layouts/CustomDiscoverSection';
import CustomVouchersSection from '@/components/layouts/CustomVouchersSection';
import CustomCarouselBanner from '../components/partials/CustomCarouselBanner';

function Home() {
    return (
        <div>
            <CustomCarouselBanner />

            <CustomVouchersSection />

            <CustomCategoryNavigation />

            <CustomDiscoverSection />

            <CustomBlogsSection />
        </div>
    );
}

export default Home;
