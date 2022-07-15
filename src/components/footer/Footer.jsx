/* pictures */
import logoImec from '../../assets/LOGOS-IMEC.png';

export default function Footer({ NavLink, Link }) {
    return (
        <footer className='w-full bg-[#ed981811]'>
            <section className='grid grid-cols-1 px-8 py-4 gap-8 space-y-8 md:space-y-0 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <img src={ logoImec } width={ 100 } />
                </div>
                <div className='flex flex-col space-y-4'>
                    <span className='text-sm font-bold'>Title one</span>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span className='text-sm font-bold'>Title one</span>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span className='text-sm font-bold'>Title one</span>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                    <NavLink className='text-xs font-semibold' to='/'>Item 1</NavLink>
                </div>
            </section>
            <div className='text-center py-4'>
                <p className='text-sm font-semibold text-gray-600'>Hecho con amor ❣️</p>
            </div>
        </footer>
    );
};