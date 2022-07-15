import { useRef, useState } from 'react';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';

/* styles */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* required modules */
import { Pagination, Navigation } from 'swiper';

/* pictures */
import imgCarousel1 from '../../assets/dfgdfgfg.png';

export default function MainCarousel({ Link }) {
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={ 1 }
                spaceBetween={ 0 }
                loop={ true }
                pagination={ {
                    clickable: true,
                } }
                navigation={ true }
                modules={ [ Pagination, Navigation ] }
                className='mySwiper'
            >
                <SwiperSlide>
                    <Link to='/'>
                        <img src={ imgCarousel1 } />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};