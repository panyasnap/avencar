import React from 'react';
import style from '../style/popular.module.css';
import armchair from '../img/popularImg/image 24.png';
import bed from '../img/popularImg/image 22.png';
import pouf from '../img/popularImg/image 23.png';
import chair from '../img/popularImg/image 25.png';

const PopularGoods = () => {
    return (
        <div className='container'>
            <h2 className={`${style.h2Text} text-center pt-5 pb-4`}>Популярные товары</h2>
            <div className='row text-center'>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0 '>
                    <img className='col-12' src={armchair} alt='armchair'/>
                    <p className='mt-1 mb-0'>Кресло замшевое</p>
                    <p>SD-313</p>
                    <p>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={bed} alt='bed'/>
                    <p className='mt-1 mb-0'>Кровать “Марсель”</p>
                    <p>SD-313</p>
                    <p className='mb-0'>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={pouf} alt='pouf'/>
                    <p className='mt-1 mb-0'>Пуф эксклюзивный</p>
                    <p>SD-313</p>
                    <p>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={chair} alt='chair'/>
                    <p className='mt-1 mb-0'>Кресло кожаное</p>
                    <p>SD-313</p>
                    <p className='mb-0'>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
            </div>

            <div className='text-center pb-5 pt-3'>
                <button className={`${style.buttonWueAll}`}>Смотреть все</button>
            </div>
</div>
    );
};

export default PopularGoods;