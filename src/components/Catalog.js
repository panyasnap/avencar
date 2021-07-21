import React from 'react';
import sofa from '../img/imgCata/Rectangle (2).png';
import sofa1 from '../img/imgCata/Rectangle.png';
import sofa2 from '../img/imgCata/Rectangle (1).png';
import style from '../style/cata.module.css';
import chair from '../img/imgCata/Rectangle1.png';
import chairs from '../img/imgCata/Rest2.png';

const Catalog = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <img className={`col-5 p-0`} src={sofa} alt='sofa'/>
                <div className={`col-7`}>
                    <div className='row '>
                        <div className='col-4 d-flex justify-content-center flex-column'>

                            <h3 className={`${style.h3textCata}`}>Изготовление мебели на заказ</h3>
                            <p className={`${style.ptextCata}`}>Создаем уникальные интерьеры и мебель премиум класса в
                                Москве</p>
                            <button className={`${style.btnCata1}`}>перейти</button>

                        </div>
                        <img className='col-8 p-0' src={sofa1} alt='sofa'/>
                    </div>
                    <div className='row '>
                        <img className='col-4 p-0 ' src={sofa2} alt='sofa'/>
                        <div className='col-8 d-flex justify-content-center flex-column'>
                            <h3 className={`${style.h3textCata}`}>Дизайн интерьера</h3>
                            <p className={`${style.ptextCata} w-50`}>Создаем уникальные интерьеры и мебель премиум класса в
                                Москве</p>
                            <button className={`${style.btnCata2}`}>перейти</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <div className='row'>

                        <img className='col-7 p-0' src={chair} alt='chair'/>

                        <div className='col-5 d-flex justify-content-center flex-column'>
                            <h3 className={`${style.h3textCata}`}>Исторические копии</h3>
                            <p className={`${style.ptextCata}`}>Создаем уникальные интерьеры и мебель премиум класса в
                                Москве</p>
                            <button className={`${style.btnCata1}`}>перейти</button>
                        </div>
                    </div>
                </div>

                <img className='col-7 p-0' src={chairs} alt='chairs'/>

            </div>

        </div>
    );
};

export default Catalog;