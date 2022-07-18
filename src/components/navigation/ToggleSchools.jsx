export default function ToggleSchools({ NavLink, Link, handdleToggleSchools }) {
    return (
        <div className='hidden md:flex flex-col gap-4 justify-start items-start leading-10 py-4 px-6 border-2 rounded-2xl'>
            <NavLink to='#' onClick={ handdleToggleSchools }>Seminarios IMEC</NavLink>
            <NavLink to='#' onClick={ handdleToggleSchools }>Zonas creativas</NavLink>
            <NavLink to='#' onClick={ handdleToggleSchools }>Campañas</NavLink>
            <NavLink to='#' onClick={ handdleToggleSchools }>Escuela de música</NavLink>
        </div>
    );
};