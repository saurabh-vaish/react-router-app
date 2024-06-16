import {Outlet} from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';

export default function Layout() {
    return (
        <>
            {/* It will remain fix */}
            <Header />

            {/* It will work as wrapper for routes, all the routes will happen under this . Header and Footer will remain fix so outside of router  */}
            <Outlet/>

            {/* It will remain fix */}
            <Footer/>
        </>
    )
}