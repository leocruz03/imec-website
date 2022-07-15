/* react hooks */
import { useState, useEffect } from 'react';

/* react router dom */
import { Routes, Route, NavLink, Link } from 'react-router-dom';

/* components that see in all pages */
import Navbar from './components/navigation/Navbar';
import TopAddres from './components/alerts/TopAddres';
import Footer from './components/footer/Footer';

/* pages */
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import DonationsPage from './pages/DonationsPage';
import AssistPage from './pages/AssistPage';

export default function App() {

    const [ responsive, setResponsive ] = useState(false);

    const handdleResponsive = () => {
        setResponsive(!responsive);
    };

    const [ loading, setLoading ] = useState(false);

    return (
        <>
            <TopAddres />
            <Navbar NavLink={ NavLink } Link={ Link } handdleResponsive={ handdleResponsive } responsive={ responsive } />
            <Routes>
                <Route path='/' element={ <HomePage Link={ Link } /> } />
                <Route path='/sedes' element={ <PlacesPage /> } />
                <Route path='/donaciones' element={ <DonationsPage /> }/>
                <Route path='/asistencia' element={ <AssistPage /> } />
            </Routes>
            <Footer NavLink={ NavLink } Link={ Link } />
        </>
    );
};