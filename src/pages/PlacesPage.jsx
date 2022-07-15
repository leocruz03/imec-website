/* components */
import BannerOnePlaces from '../components/banners/BannerOnePlaces';
import PlacesCards from '../components/cards/PlacesCards';

export default function PlacesPage() {
    return (
        <>
            <BannerOnePlaces />
            <main className='max-w-7xl mx-auto p-8 lg:p-12'>
                <PlacesCards />
            </main>
        </>
    );
};