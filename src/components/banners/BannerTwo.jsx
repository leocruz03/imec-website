/* pictures */
import pic1 from '../../assets/2I5A0396 copia.jpg';

export default function BannerTwo() {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
                <section className='space-y-4'>
                    <h3>¿Quiénes somos?</h3>
                    <p className='text-[.94rem] md:text-[1rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta non. Netus et malesuada fames ac turpis egestas maecenas. Diam maecenas sed enim ut sem viverra aliquet. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Orci dapibus ultrices in iaculis.
                    </p>
                </section>
                <section>
                    <img src={ pic1 } className='rounded-2xl' />
                </section>
            </div>
        </div>
    );
};