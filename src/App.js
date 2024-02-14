import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelsDirectoryPage from './pages/HotelsDirectoryPage';
import HotelDetailPage from './pages/HotelDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchHotels } from './features/hotels/hotelsSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch]);
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='directory' element={<HotelsDirectoryPage />} />
                <Route
                    path='directory/:hotelId'
                    element={<HotelDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
