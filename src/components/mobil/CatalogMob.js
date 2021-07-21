import React, {useContext} from 'react';
import {context} from "../utils/context";
import CatalogMobil from "./CatalogMobil";
import CatalogTablet from "./CatalogTablet";

const CatalogMob = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            {windowWidth < 768 ? <CatalogMobil/> : <CatalogTablet/>}
        </div>
    );
}
;

export default CatalogMob;