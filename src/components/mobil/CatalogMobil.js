import React from 'react';
import style from "../../style.mobil/CatalogMobil.module.css"
import chair from '../../imgMobil/CatalogImg/Rectangle.png';
import chair2 from '../../imgMobil/CatalogImg/Rectangle (1).png';
import sofa from '../../imgMobil/CatalogImg/Rectangle (2).png';
import chairs from '../../imgMobil/CatalogImg/Rectangle (3).png';
import table from '../../imgMobil/CatalogImg/Rectangle (4).png';

const CatalogMobil = () => {
    return (
        <div>
            <img className='w-100' src={chair} alt='chair'/>
            <div className='container pb-3 pt-4'>
                <div className='d-flex justify-content-center flex-column '>
                    <h3 className={``}>Изготовление мебели на заказ</h3>
                    <p className={`${style.ptext}`}>Создаем уникальные интерьеры и мебель премиум класса в
                        Москве</p>
                    <button className={`${style.btnCata1}`}>перейти</button>
                </div>
            </div>
            <img className='w-100' src={chair2} alt='chair2'/>
            <div className=' d-flex justify-content-center flex-column container  pb-3 pt-4'>
                <h3 className={``}>Дизайн интерьера</h3>
                <p className={`${style.ptext} `}>Создаем уникальные интерьеры и мебель премиум класса в
                    Москве</p>
                <button className={`${style.btnCata2}`}>перейти</button>
            </div>
            <img className='w-100' src={sofa} alt='sofa'/>
            <img className='w-100' src={chairs} alt='chairs'/>
            <div className='d-flex justify-content-center flex-column container  pb-3 pt-4'>
                <h3 className={`${style.h3textCata}`}>Исторические копии</h3>
                <p className={`${style.ptext}`}>Создаем уникальные интерьеры и мебель премиум класса в
                    Москве</p>
                <button className={`${style.btnCata1}`}>перейти</button>
            </div>
            <img className='w-100' src={table} alt='table'/>

        </div>
    );
};

export default CatalogMobil;