import React, {useContext} from 'react';
import {context} from "../utils/context";
import style from "../../style/furniture.module.css";
import commode from "../../img/imgCategories/Rectangle 44.png";
import bed from "../../img/imgCategories/Rectangle 40.png";
import armchair from "../../img/imgCategories/Rectangle 47.png";
import sofa from "../../img/imgCategories/Rectangle 45.png";
import cupboard from "../../img/imgCategories/Rectangle 41.png";
import banquet from "../../img/imgCategories/Rectangle 49.png";
import table from "../../img/imgCategories/Rectangle 46.png";
import kitchen from "../../img/imgCategories/Rectangle 50.png";
import chairs from "../../img/imgCategories/Rectangle 48.png";
import {Link} from "react-router-dom";
import {mainPage} from "../utils/constans";

const Furniture = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            {windowWidth > 550 ?
                <div className={`${style.backCategories} pb-3 `}>
                    <div className='container'>
                        <div className='row pt-3 pl-2'><Link className={`${style.linkMain}`}
                                                             to={mainPage}>Главная</Link>
                            <div className='pl-2 pr-2'>/</div>
                            <div className={`${style.furnitureText}`}>Meбель</div>
                        </div>
                        <h2 className={`${style.h2Text} text-center pt-3`}>Mебель</h2>
                        <div className='row '>
                            <div className='col-4 p-0 '>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12 `} src={commode} alt='commode'/>
                                    <div className={`${style.imgHover}`}>
                                        <h3 className={`${style.h3Hover} pt-5 `}>Комоды
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} p-4`}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textComm} pl-4 pr-4`}>Комоды</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12 `} src={bed} alt='bed'/>
                                    <div className={`${style.imgHoverBed}`}>
                                        <h3 className={`${style.h3Hover} pt-3 `}>Кровати
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} pl-4 pr-4 `}>Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>

                                    <p className={`${style.textKitchen} pl-4 pr-4`}>Кровати</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12 `} src={armchair} alt='armchair'/>
                                    <div className={`${style.imgHoverArmchair}`}>
                                        <h3 className={`${style.h3Hover} pt-5 `}>Кресла
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} p-4`}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textChairs} pl-4 pr-4`}>Кресла</p>
                                </div>
                            </div>
                            <div className='col-4 p-0'>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12 `} src={sofa} alt='sofa'/>
                                    <div className={`${style.imgHoverSofa}`}>
                                        <h3 className={`${style.h3Hover} pt-3 `}>Диваны
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} pl-4 pr-4 `}>Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textSofa} pl-4 pr-4`}>Диваны</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgCupboard} col-12 `} src={cupboard} alt='cupboard'/>
                                    <div className={`${style.imgHoverCupboard}`}>
                                        <h3 className={`${style.h3Hover} pt-5 `}>Шкафы
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} p-4`}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textCupboard} pl-4 pr-4`}>Шкафы</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgCupboard} col-12 `} src={banquet} alt='banquet'/>
                                    <div className={`${style.imgHoverBanquet}`}>
                                        <h3 className={`${style.h3Hover} pt-3 `}>Банкетки
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} pl-4 pr-4 `}>Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textBanquet} pl-4 pr-4`}>Банкетки</p>
                                </div>
                            </div>
                            <div className='col-4 p-0'>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12 `} src={table} alt='table'/>
                                    <div className={`${style.imgHoverTable}`}>
                                        <h3 className={`${style.h3Hover} pt-5 `}>Столы
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} p-4`}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textTable} pl-4 pr-4`}>Столы</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12`} src={kitchen} alt='kitchen'/>
                                    <div className={`${style.imgHoverKitchen}`}>
                                        <h3 className={`${style.h3Hover} pt-3 `}>Кухни
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} pl-4 pr-4 `}>Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textKitchen} pl-4 pr-4`}>Кухни</p>
                                </div>
                                <div className={`mt-4 mb-4 ${style.blockHover}`}>
                                    <img className={`${style.imgSofa} col-12`} src={chairs} alt='chairs'/>
                                    <div className={`${style.imgHoverChairs}`}>
                                        <h3 className={`${style.h3Hover} pt-5 `}>Стулья
                                            <hr className={`${style.hrStyle} `}/></h3>
                                        <p className={`${style.pTextHover} p-4`}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Tellus malesuada
                                            urna, sollicitudin blandit ornare. Nunc risus facilisi vel.</p></div>
                                    <p className={`${style.textChairs} pl-4 pr-4`}>Стулья</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className={`${style.backCategories} container-fluid`}>
                    <div className='row pt-3 pl-2'><Link className={`${style.linkMain}`}
                                                         to={mainPage}>Главная</Link>
                        <div className='pl-2 pr-2'>/</div>
                        <div className={`${style.furnitureText}`}>Meбель</div>
                    </div>
                    <h2 className={`${style.h2Text} text-center pt-5`}>Мебель</h2>
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

export default Furniture;