import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

function Layout() {
    return (
        <div className="layout">
            <div className="header">
                <HeaderNav />
            </div>
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
