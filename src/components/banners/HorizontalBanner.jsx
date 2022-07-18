/* pictures */
import logoImgOne from '../../assets/1.png';
import logoImgTwo from '../../assets/2.png';
import logoImgThree from '../../assets/3.png';
import logoImgFour from '../../assets/4.png';
import logoImgFive from '../../assets/5.png';
import logoImgSix from '../../assets/6.png';
import logoImgSeven from '../../assets/7.png';

export default function HorizontalBanner() {
    return (
        <div className='w-full bg-gray-100'>
            <section className='flex items-center justify-center space-x-8 px-8 py-2 md:space-x-0 md:justify-between'>
                <div className=''><img src={ logoImgOne } className='w-16' /></div>
                <div className=''><img src={ logoImgTwo } className='w-10' /></div>
                <div className=''><img src={ logoImgThree } className='w-12' /></div>
                <div className=''><img src={ logoImgFour } className='w-20' /></div>
                <div className=''><img src={ logoImgFive } className='w-16' /></div>
                <div className=''><img src={ logoImgSix } className='w-16' /></div>
                <div className=''><img src={ logoImgSeven } className='w-24' /></div>
            </section>
        </div>
    );
};