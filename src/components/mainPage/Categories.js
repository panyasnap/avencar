import React, {useContext} from 'react';
import style from '../../style/categories.module.css'
import commode from '../../img/imgCategories/Rectangle 44.png';
import bed from '../../img/imgCategories/Rectangle 40.png';
import armchair from '../../img/imgCategories/Rectangle 47.png';
import sofa from '../../img/imgCategories/Rectangle 45.png';
import cupboard from '../../img/imgCategories/Rectangle 41.png';
import banquet from '../../img/imgCategories/Rectangle 49.png';
import table from '../../img/imgCategories/Rectangle 46.png';
import kitchen from '../../img/imgCategories/Rectangle 50.png';
import chairs from '../../img/imgCategories/Rectangle 48.png';
import {context} from "../utils/context";

const Categories = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            {windowWidth > 550 ?
                <div className={`${style.backCategories} `}>
                    <div className='container'>
                        <h2 className={`${style.h2Text} text-center pt-5`}>Категории товаров</h2>
                        <div className='row '>
                            <div className='col-4 p-0 '>
                                <div className='mt-4 mb-4'>
                                    <img className={`${style.imgSofa} col-12 `} src={commode} alt='commode'/>
                                    <p className={`${style.textTable} pl-4 pr-4`}>Комоды</p>
                                </div>
                                <div className='mt-4 mb-4'>
                                    <img className={`${style.imgSofa} col-12 `} src={bed} alt='bed'/>
                                    <p className={`${style.textKitchen} pl-4 pr-4`}>Кровати</p>
                                </div>
                                <div className='mt-4 mb-4'>
                                    <img className={`${style.imgSofa} col-12 `} src={armchair} alt='armchair'/>
                                    <p className={`${style.textChairs} pl-4 pr-4`}>Кресла</p>
                                </div>
                            </div>
                            <div className='col-4 p-0'>
                                <div className='mt-4 mb-4 '>
                                    <img className={`${style.imgSofa} col-12 `} src={sofa} alt='sofa'/>
                                    <p className={`${style.textSofa} pl-4 pr-4`}>Диваны</p>
                                </div>
                                <div className='mt-4 mb-4 '>
                                    <img className={`${style.imgCupboard} col-12 `} src={cupboard} alt='cupboard'/>
                                    <p className={`${style.textCupboard} pl-4 pr-4`}>Шкафы</p>
                                </div>
                                <div className='mt-4 mb-4'>
                                    <img className={`${style.imgCupboard} col-12 `} src={banquet} alt='banquet'/>
                                    <p className={`${style.textBanquet} pl-4 pr-4`}>Банкетки</p>
                                </div>
                            </div>
                            <div className='col-4 p-0'>
                                <div className='mt-4 mb-4 '>
                                    <img className={`${style.imgSofa} col-12 `} src={table} alt='table'/>
                                    <p className={`${style.textTable} pl-4 pr-4`}>Столы</p>
                                </div>
                                <div className='mt-4 mb-4 '>
                                    <img className={`${style.imgSofa} col-12`} src={kitchen} alt='kitchen'/>
                                    <p className={`${style.textKitchen} pl-4 pr-4`}>Кухни</p>
                                </div>
                                <div className='mt-4 mb-4 '>
                                    <img className={`${style.imgSofa} col-12`} src={chairs} alt='chairs'/>
                                    <p className={`${style.textChairs} pl-4 pr-4`}>Стулья</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className={`${style.backCategories} container-fluid`}>
                    <h2 className={`${style.h2Text} text-center pt-5`}>Категории товаров</h2>
                    <div className='row 0'>
                        <div className='col-6 p-0 m-0'>
                            <div className='mb-3'>
                                <img className={`${style.imgSofa} col-12 pr-2`} src={commode} alt='commode'/>
                                <p className={`${style.textCommode} pl-4 pr-4`}>Комоды</p>
                            </div>
                            <div className='mb-3 pt-1'>
                                <img className={`${style.imgSofa} col-12 pr-2`} src={chairs} alt='chairs'/>
                                <p className={`${style.textChair} pl-4 pr-4`}>Стулья</p>
                            </div>
                            <div className='mb-3 '>
                                <img className={`${style.imgSofa} col-12 pr-2`} src={armchair} alt='armchair'/>
                                <p className={`${style.textChairs} pl-4 pr-4`}>Кресла</p>
                            </div>
                            <div className='mb-3 pt-1'>
                                <img className={`${style.imgSofa} col-12 pr-2`} src={table} alt='table'/>
                                <p className={`${style.textTable} pl-4 pr-4 `}>Столы</p>
                            </div>
                        </div>
                        <div className='col-6 p-0 m-0'>
                            <div className='mb-3'>
                                <img className={`${style.imgSofa} col-12 pl-2`} src={sofa} alt='sofa'/>
                                <p className={`${style.textSofa} pl-4 pr-4`}>Диваны</p>
                            </div>
                            <div className='mb-3'>
                                <img className={`${style.imgCupboard} col-12 pl-2`} src={cupboard} alt='cupboard'/>
                                <p className={`${style.textCupboard} pl-4 pr-4`}>Шкафы</p>
                            </div>
                            <div className='mb-3'>
                                <img className={`${style.imgCupboard} col-12 pl-2 `} src={banquet} alt='banquet'/>
                                <p className={`${style.textBanquet} pl-4 pr-4`}>Банкетки</p>
                            </div>
                            <div className='mb-3'>
                                <img className={`${style.imgSofa} col-12 pl-2`} src={kitchen} alt='kitchen'/>
                                <p className={`${style.textKitchen} pl-4 pr-4`}>Кухни</p>
                            </div>
                            <div className=''>
                                <img className={`${style.imgSofa} col-12 pl-2`} src={bed} alt='bed'/>
                                <p className={`${style.textBed} pl-4 pr-4`}>Кровати</p>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Categories;