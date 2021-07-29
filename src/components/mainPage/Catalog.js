import React from 'react';
import sofa from '../../img/imgCata/Rectangle (2).png';
import sofa1 from '../../img/imgCata/Rectangle.png';
import sofa2 from '../../img/imgCata/Rectangle (1).png';
import style from '../../style/cata.module.css';
import chair from '../../img/imgCata/Rectangle1.png';
import chairs from '../../img/imgCata/Rest2.png';
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-5 p-0'><Link to={`#`}> <img className={`w-100 h-100`} src={sofa} alt='sofa'/>
                </Link></div>
                <div className={`col-7`}>
                    <div className='row '>
                        <div className='col-4 '>

                            <h3 className={`${style.h3textCata} mt-3 mt-lg-2 mt-xl-3 mt-sm-0 ml-2`}>Изготовление мебели
                                на заказ</h3>
                            <p className={`${style.ptextCata} ml-2 `}>Создаем
                                уникальные интерьеры и мебель премиум класса в
                                Москве</p>
                            <button className={`${style.btnCata1} ml-2`}>перейти</button>

                        </div>
                        <div className='col-8 p-0'><Link to={`#`}> <img className='w-100 h-100' src={sofa1} alt='sofa'/></Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 p-0'><Link to={`#`}><img className=' w-100 h-100' src={sofa2} alt='sofa'/></Link>
                        </div>
                        <div className='col-8 '>
                            <h3 className={`${style.h3textDesign} mt-3 mt-lg-2 mt-xl-3 mt-sm-1 ml-2`}>Дизайн
                                интерьера</h3>
                            <p className={`${style.ptextCata} w-50 ml-2 `}>Создаем
                                уникальные интерьеры и мебель премиум класса в
                                Москве</p>

                            <button className={`${style.btnCata2}  ml-2`}>перейти</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-5 '>
                    <div className='row'>
                        <div className='col-7 p-0'><Link to={`#`}> <img className=' w-100 h-100' src={chair}
                                                                        alt='chair'/></Link></div>

                        <div className='col-5 '>
                            <h3 className={`${style.h3textCata} mt-3 mt-lg-2 mt-xl-3 mt-sm-1 ml-2`}>Исторические
                                копии</h3>
                            <p className={`${style.ptextCata} ml-2 `}>Создаем
                                уникальные интерьеры и мебель премиум класса в
                                Москве</p>
                            <button className={`${style.btnCata1} ml-2`}>перейти</button>
                        </div>
                    </div>
                </div>

                <div className='col-7 p-0'><Link to={`#`}><img className='w-100 h-100' src={chairs}
                                                               alt='chairs'/></Link></div>

            </div>

        </div>
    );
};

export default Catalog;