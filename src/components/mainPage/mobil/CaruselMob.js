import React, {useContext} from 'react';
import style from "../../../style.mobil/CaruselMobil.module.css"
import background from '../../../imgMobil/imgCaruselMob/Rectangle.svg';
import background768 from '../../../imgMobil/imgCaruselMob/Rectangle768.svg';
import {context} from "../../utils/context";

const CaruselMob = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>

            {windowWidth < 768 ? <img className='w-100 position-absolute' src={background} alt='background'/> :
                <img className='w-100 position-absolute' src={background768} alt='background'/>}
            <div className='container position-relative '>
                <div className='w-100 mb-2'>
                    <h3 className={`${style.h3textMob}`}>
                        <div><span className={`${style.spanMob}`}>Дизайн, изготовление мебели</span></div>
                        <span className={`${style.spanMob} pb-1`}> и интерьера на заказ
                                </span></h3>
                </div>
                <div className='w-70 position-relative mb-1'>
                    <div className={`${style.ptextMob} `}>
                        <div><span className={`${style.pspanMob} pb-0`}>Создаем уникальные интерьеры и мебель премиум</span>
                        </div>
                        <span className={`${style.spanMob} pb-1`}> класса в Москве и
                                Санкт-Петербурге</span></div>
                </div>
                <button className={`${style.buttonCaruselMob} mt-2 position-relative`}>Заказать консультацию</button>
            </div>
        </div>
    );
};

export default CaruselMob;