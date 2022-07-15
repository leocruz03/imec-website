/* data */
import  DataPlaces from '../../data/DataPlaces';

export default function PlacesCards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            { DataPlaces?.map(place => (
                <div className='w-full rounded-xl border-2 border-[#8f1b8022] bg-[#ed981811]'>
                    <section className='p-4'>
                        <div>
                            <h3>{ place.name }</h3>
                            <p>{ place.address }</p>
                        </div>
                    </section>
                </div>
            )) }
        </div>
    );
};