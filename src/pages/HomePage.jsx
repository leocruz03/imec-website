/* components */
import BannerOne from '../components/banners/BannerOne';
import MainCarousel from '../components/carousel/MainCarousel';

export default function HomePage({ Link }) {
    return (
        <div>

            <BannerOne />
            <MainCarousel Link={ Link } />
            <main className='max-w-7xl mx-auto p-8 lg:p-12'>
            </main>
        </div>
    );
};