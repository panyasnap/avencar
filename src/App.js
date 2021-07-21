import './App.css';
import Header from "./components/header";
import Catalog from "./components/Catalog";
import Carusel from "./components/Carusel";
import Categories from "./components/Categories";
import PopularGoods from "./components/PopularGoods";
import Consultation from "./components/Consultation";
import LastWorks from "./components/LastWorks";
import Footer from "./components/Footer";
import HeaderMobil from "./components/mobil/HeaderMobil";
import CaruselMob from "./components/mobil/CaruselMob";
import {useEffect, useState} from "react";
import {context} from './components/utils/context'

import CatalogMob from "./components/mobil/CatalogMob";


function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <context.Provider value={
            {
                windowWidth
            }
        }>
            <div className="App">
                {windowWidth < 1024 ?
                    <div>
                        <HeaderMobil/>
                        <CaruselMob/>
                        <CatalogMob/></div>
                    : <div>
                        <Header/>
                        <Carusel/>
                        <Catalog/>

                    </div>}
                <Categories/>
                <PopularGoods/>
                <Consultation/>
                <LastWorks/>
                <Footer/>

            </div>
        </context.Provider>
    );
}

export default App;
