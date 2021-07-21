import React from 'react';
import style from "../style/popular.module.css";
import armchair from "../img/imgLastWorks/image 28.png";
import bed from "../img/imgLastWorks/image 27.png";
import pouf from "../img/imgLastWorks/image 29.png";
import chair from "../img/imgLastWorks/image 26.png";

const LastWorks = () => {
    return (
        <div className='container'>
            <h2 className={`${style.h2Text} text-center pt-5 pb-4`}>Наши последние работы</h2>
            <div className='row text-center'>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0 '>
                    <img className='col-12' src={armchair} alt='armchair'/>
                    <p className='mt-1 mb-0'>Диван эксклюзивный</p>
                    <p className=''>SD-313</p>
                    <p className='pBold'>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={chair} alt='chair'/>
                    <p className='mt-1 mb-0'>Кресло замшевое</p>
                    <p className=''>SD-313</p>
                    <p className='mb-0 pBold'>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={bed} alt='bed'/>
                    <p className='mt-1 mb-0 '>Кровать “Марсель”</p>
                    <p className=''>SD-313</p>
                    <p className='pBold'>8 000 руб.</p>

                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <img className='col-12' src={pouf} alt='pouf'/>
                    <p className='mt-1 mb-0 '>Пуф эксклюзивный</p>
                    <p className=''>SD-313</p>
                    <p className='mb-0 pBold'>10 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>

            </div>

            <div className='text-center pb-5 pt-3'>
                <button className={`${style.buttonLastWorks}`}>Смотреть все</button>
            </div>
        </div>
    );
};

export default LastWorks;