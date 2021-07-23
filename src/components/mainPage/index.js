import React, {useContext} from 'react';
import CaruselMob from "./mobil/CaruselMob";
import CatalogMob from "./mobil/CatalogMob";
import Carusel from "./Carusel";
import Catalog from "./Catalog";
import Categories from "./Categories";
import PopularGoods from "./PopularGoods";
import Consultation from "./Consultation";
import LastWorks from "./LastWorks";
import {context} from "../utils/context";

const MainPage = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            {windowWidth < 1024 ?
                <div>
                    <CaruselMob/>
                    <CatalogMob/>
                </div>
                : <div>
                    <Carusel/>
                    <Catalog/>
                </div>}
            <Categories/>
            <PopularGoods/>
            <Consultation/>
            <LastWorks/>
        </div>
    );
};

export default MainPage;