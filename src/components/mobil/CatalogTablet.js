import React from 'react';
import style from "../../style.mobil/CatalogMobil.module.css"
import chair from '../../imgMobil/CatalogImg/tablet/Rectangle.png';
import chair2 from '../../imgMobil/CatalogImg/tablet/Rectangle1.svg';
import sofa from '../../imgMobil/CatalogImg/tablet/Rectangle.svg';
import chairs from '../../imgMobil/CatalogImg/tablet/Rectangle (1).svg';
import table from '../../imgMobil/CatalogImg/tablet/Rectangle (2).svg';

const CatalogTablet = () => {
    return (
        <div>
            <img className='w-100 h-100' src={chair} alt='chair'/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='d-flex justify-content-center flex-column col-6 pl-5'>
                        <h3 className={`${style.h3Tablet} w-75`}>Изготовление мебели на заказ</h3>
                        <p className={`${style.ptextTablet} mb-1 `}>Создаем уникальные интерьеры и мебель премиум класса
                            в
                            Москве</p>
                        <button className={`${style.btnTablet1}`}>перейти</button>
                    </div>
                    <img className='col-6 pr-0 pl-0' src={chair2} alt='chair2'/>

                </div>
                <div className='row'>
                    <img className='col-6 pl-0 pr-0 ' src={sofa} alt='sofa'/>
                    <div className='d-flex justify-content-center flex-column col-6 pl-5'>
                        <h3 className={`${style.h3Tablet} w-75`}>Дизайн интерьера</h3>
                        <p className={`${style.ptextTablet} mb-1 `}>Создаем уникальные интерьеры и мебель премиум класса
                            в
                            Москве</p>
                        <button className={`${style.btnTablet2}`}>перейти</button>
                    </div>


                </div>
                <div className='row'>
                    <div className='d-flex justify-content-center flex-column col-6 pl-5'>
                        <h3 className={`${style.h3Tablet} w-75`}>Исторические копии</h3>
                        <p className={`${style.ptextTablet} mb-1 `}>Создаем уникальные интерьеры и мебель премиум класса
                            в
                            Москве</p>
                        <button className={`${style.btnTablet1}`}>перейти</button>
                    </div>
                    <img className='col-6 pr-0 pl-0 ' src={chairs} alt='chairs'/>

                </div>
            </div>
            <img className='w-100' src={table} alt='table'/>
        </div>
    );
};

export default CatalogTablet;