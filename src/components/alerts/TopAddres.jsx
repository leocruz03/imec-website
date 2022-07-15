/* react hooks */
import { useState, useEffect } from 'react';

/* hero icons */
import { XIcon } from '@heroicons/react/outline';

export default function TopAddres() {

    const [ closeAlert, setCloseAlert ] = useState(false);

    const handdleCloseAlert = () => {
        setCloseAlert(!closeAlert);
    };

    return (
        <div className={ `${ !closeAlert ? 'w-full top-0 bg-[#8f1b80] 2xl:hidden' : 'hidden' }` }>
            <section className='flex items-center justify-between px-12 py-2'>
                <p className='font-bold text-xs text-white md:text-sm'>Sede principal: Cra. 14 B # 45 – 100 Centro</p>
                <button onClick={ handdleCloseAlert }>
                    <XIcon className='w-4 text-white' />
                </button>
            </section>
        </div>
    );
};