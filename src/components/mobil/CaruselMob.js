import React, {useContext} from 'react';
import style from "../../style.mobil/CaruselMobil.module.css"
import background from '../../imgMobil/imgCaruselMob/Rectangle.svg';
import background768 from '../../imgMobil/imgCaruselMob/Rectangle768.svg';
import {context} from "../utils/context";

const CaruselMob = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>

            {windowWidth < 768 ? <img className='w-100 position-absolute' src={background} alt='background'/>:
            <img className='w-100 position-absolute' src={background768} alt='background'/>}
            <div className='container position-relative '>
                <div className='w-100 '>
                    <h3 className={`${style.h3text}`}>
                        <div><span>Дизайн, изготовление мебели</span></div>
                        <span> и интерьера на заказ
                                </span></h3>
                </div>
                <div className='w-70 position-relative'>
                    <p className={`${style.ptext} `}>
                        <div><span className={`${style.pspan}`}>Создаем уникальные интерьеры и мебель премиум</span>
                        </div>
                        <span> класса в Москве и
                                Санкт-Петербурге</span></p>
                </div>
                <button className={`${style.buttonCarusel} position-relative`}>Заказать консультацию</button>
            </div>
        </div>
    );
};

export default CaruselMob;