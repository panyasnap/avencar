import React, {useContext} from 'react';
import style from '../../style/popular.module.css';
import armchair from '../../img/popularImg/image 24.png';
import bed from '../../img/popularImg/image 22.png';
import pouf from '../../img/popularImg/image 23.png';
import chair from '../../img/popularImg/image 25.png';
import {context} from "../utils/context";

const PopularGoods = () => {
    const {windowWidth} = useContext(context);
    return (
        <div className='container'>
            <h2 className={`${style.h2Text} text-center pt-5 pb-4`}>Популярные товары</h2>
            <div className='row text-center'>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0 '>
                    <img className='col-12' src={armchair} alt='armchair'/>
                    <div className={`${style.textName} mt-1 mb-0 mb-lg-0 mb-sm-2`}>Кресло замшевое <span className={`${style.spanNumber}`}>SD-313</span></div>
                    <p className={`${style.textNumber}`}>SD-313</p>
                    <p className={`${style.textPrice}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={bed} alt='bed'/>

                    <div className={`${style.textName}  mt-1 mb-0 mb-lg-0 mb-sm-2`}>Кровать “Марсель” <span className={`${style.spanNumber}`}>SD-313</span></div>
                    <p className={`${style.textNumber}   ml-0`}>SD-313</p>
                    <p className={`${style.textPrice} mb-0`}>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={pouf} alt='pouf'/>
                    <div className={`${style.textName} mt-1 mb-0 mb-lg-0 mb-sm-2`}>Пуф эксклюзивный <span className={`${style.spanNumber}`}>SD-313</span></div>
                    <p className={`${style.textNumber} `}>SD-313</p>
                    <p className={`${style.textPrice} `}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={chair} alt='chair'/>
                    <div className={`${style.textName} mt-1 mb-0 mb-lg-0 mb-sm-2`}>Кресло кожаное <span className={`${style.spanNumber}`}>SD-313</span></div>
                    <p className={`${style.textNumber} `}>SD-313</p>
                    <p className={`${style.textPrice} mb-0`}>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
            </div>

            <div className='text-center '>
                {windowWidth > 550 ?
                <button className={`${style.buttonWueAll}  mb-5 mt-3`}>Смотреть все </button>:
                    <button className={`${style.buttonLastWorks}  mb-4 mt-3`}>Смотреть еще </button>}
            </div>
</div>
    );
};

export default PopularGoods;