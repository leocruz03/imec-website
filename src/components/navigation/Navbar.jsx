/* react hooks */
import { useState } from 'react';

/* hero icons */
import { MenuAlt4Icon } from '@heroicons/react/outline';

/* pictures */
import logoImec from '../../assets/LOGOS-IMEC.png';

/* components */
import ResponsiveNavbar from './ResponsiveNavbar';
import ToggleSchools from './ToggleSchools';

export default function Navbar({ NavLink, Link, handdleResponsive, responsive }) {

    const [ toggleSchools, setToggleSchools ] = useState(false);

    const handdleToggleSchools = () => {
        setToggleSchools(!toggleSchools);
    };

    return (
        <header className='w-full top-0 left-0 sticky z-30 bg-white'>
            <div className='flex px-8 py-2 items-center justify-center lg:px-16'>
                <section className='w-full flex items-center justify-start'>
                    <Link to='/'>
                        <img src={ logoImec } className='w-24' />
                    </Link>
                </section>
                <section className='hidden items-center justify-center space-x-10 font-semibold text-[#8f1b80] md:flex'>
                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/sedes'>Sedes</NavLink>
                    <NavLink to='/asistencia'>Asistencia</NavLink>
                    <NavLink to='/donaciones'>Donaciones</NavLink>
                </section>
                <section className='w-full flex items-center justify-end space-x-6'>
                    <button onClick={ handdleToggleSchools } className='hidden px-3 py-1 rounded-lg text-base font-semibold text-white bg-indigo-600 transform duration-100 active:scale-110 md:inline'>
                        Escuelas
                    </button>
                    <div className={ `${ toggleSchools ? 'absolute top-16 right-2 md:right-8 z-30 bg-white rounded-2xl transition ease-in-out duration-150' : 'hidden transition ease-in-out duration-150' }` }>
                        <ToggleSchools NavLink={ NavLink } Link={ Link } handdleToggleSchools={ handdleToggleSchools } />
                    </div>
                    <NavLink to='/' className='px-3 py-1 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:shadow-md hover:shadow-orange-200 md:hidden'>
                        Contactanos
                    </NavLink>
                    <button onClick={ handdleResponsive } className='px-2 py-1 rounded-lg bg-gray-200 md:hidden'>
                        <MenuAlt4Icon className='w-6 h-6' />
                    </button>
                </section>
            </div>
            <ResponsiveNavbar NavLink={ NavLink } Link={ Link } responsive={ responsive } handdleResponsive={ handdleResponsive } />
        </header>
    );
};