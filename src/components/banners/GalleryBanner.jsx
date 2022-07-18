/* pictures */
import pic1 from '../../assets/2I5A0396 copia.jpg';
import pic2 from '../../assets/2I5A0404 copia.jpg';
import pic3 from '../../assets/2I5A0422 copia.jpg';
import pic5 from '../../assets/2I5A0425 copia.jpg';

export default function GalleryBanner() {
    return (
        <div className='w-full'>
            <section className='space-y-8'>
                <div className='w-full text-center font-bold text-3xl md:text-4xl lg:text-6xl'>
                    <span className='text-[#8f1b80]'>Galeria</span>
                </div>
                <div className='grid grid-flow-col grid-cols-2 grid-rows-2 md:grid-rows-2 md:grid-cols-3 gap-8'>
                    <div className='row-start-1 row-span-2'>
                        <img src={ pic2 } className='rounded-xl shadow-sm shadow-[#8f1b8088]' />
                    </div>
                    <div>
                        <img src={ pic1 } className='rounded-xl shadow-sm shadow-[#8f1b8088]' />
                    </div>
                    <div>
                        <img src={ pic3 } className='rounded-xl shadow-sm shadow-[#8f1b8088]' />
                    </div>
                    <div className='col-start-2 row-start-2 hidden md:inline'>
                        <img src={ pic3 } className='rounded-xl shadow-sm shadow-[#8f1b8088]' />
                    </div>
                    <div className='col-start-2 col-span-1 hidden md:inline'>
                        <img src={ pic5 } className='rounded-xl shadow-sm shadow-[#8f1b8088]' />
                    </div>
                </div>
            </section>
        </div>
    );
};