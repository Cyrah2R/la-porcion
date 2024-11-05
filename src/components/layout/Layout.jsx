import { useLocation } from 'react-router-dom'; // Necesitas importar useLocation
import { HeaderNav } from "./HeaderNav";
import { Body } from "./Body";
import { Footer } from "./Footer";
import '../../index.css';

function Layout() {

    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/' || location.pathname === '/inicio';

    return (

        <div className="layout">
            {!hideHeaderFooter && (
                <div className="header">
                    <HeaderNav />
                </div>
            )}
            <div className="body">
                <Body />
            </div>
            {!hideHeaderFooter && (
                <div className="footer">
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Layout;
