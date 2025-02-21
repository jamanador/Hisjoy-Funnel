import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/HeaderNew';
import NewFooter from '../components/NewFooter';
import SecondaryNavbar from '../components/SecondaryNav';

export default function Layout() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrollingDown(scrollY > lastScrollY);
            lastScrollY = scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if the current path is the home page or the single product page
    const isHomeOrProductPage = location.pathname === '/home' || location.pathname.startsWith('/home/treatment/product');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {isHomeOrProductPage && <SecondaryNavbar isScrollingDown={isScrollingDown} />}
            <Outlet />
            <NewFooter />
        </div>
    );
}
