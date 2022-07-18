/* hero icons */
import { XIcon } from '@heroicons/react/outline';

/* pictures */
import logoImec from '../../assets/LOGOS-IMEC.png';

export default function ResponsiveNavbar({ NavLink, Link, responsive, handdleResponsive }) {
    return (
        <div className={ `${ responsive ? 'absolute top-0 left-0 w-full h-[100vh] max-w-full overflow-x-hidden block bg-white' : 'hidden' }` }>
            <nav className='flex flex-col px-8 py-4 space-y-8 font-semibold bg-white'>
                <div className='flex items-center justify-between'>
                    <Link to='/'>
                        <img src={ logoImec } className='w-24' />
                    </Link>
                    <button onClick={ handdleResponsive } className='px-2 py-1 rounded-lg bg-gray-200'>
                        <XIcon className='w-6' />
                    </button>
                </div>
                <NavLink to='/' onClick={ handdleResponsive }>Inicio</NavLink>
                <NavLink to='/sedes' onClick={ handdleResponsive }>Sedes</NavLink>
                <a href='https://libreriacristiana.com.co/' target='_blank' onClick={ handdleResponsive }>Librería</a>
                <NavLink to='/donaciones' onClick={ handdleResponsive }>Donaciones</NavLink>
                <NavLink to='#' className='' onClick={ handdleResponsive }>Escuelas

                    <div className='p-4'>
                        <section className='flex flex-col space-y-3 text-gray-600'>
                            <NavLink to='#' onClick={ handdleResponsive }>Seminarios IMEC</NavLink>
                            <NavLink to='#' onClick={ handdleResponsive }>Zonas creativas</NavLink>
                            <NavLink to='#' onClick={ handdleResponsive }>Campañas</NavLink>
                            <NavLink to='#' onClick={ handdleResponsive }>Escuela de música</NavLink>
                        </section>
                    </div>

                </NavLink>
            </nav>
        </div>
    );
};