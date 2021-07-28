import React from 'react';
import {Carousel} from "react-bootstrap";
import img from "../../img/imgHeader/Rectangle.svg";
import style from '../../style/Carusel.module.css';
import {Link} from "react-router-dom";

const Carusel = () => {
    return (
        <div>
            <Carousel className={`${style.carouselStyle} carouselStyle`} interval={null}>
                <Carousel.Item>
                    <Link to={'#'}><img
                        className="d-block w-100 "
                        src={img}
                        alt="First slide"
                    /></Link>
                    <Carousel.Caption >
                        <div className={`${style.textMain} `}>
                            <div className='w-100 '>
                                <h3 className={`${style.h3text} `}>
                                    <div><span>Дизайн, изготовление мебели</span></div>
                                    <span> и интерьера на заказ
                                </span></h3>
                            </div>
                            <div className='w-70'>
                                <div className={`${style.ptext}`}>
                                    <div><span className={`${style.pspan}`}>Создаем уникальные интерьеры и мебель премиум</span>
                                    </div>
                                    <span className={`${style.pspan}`}> класса в Москве и
                                Санкт-Петербурге</span></div>
                            </div>


                            <button className={`${style.buttonCarusel} mt-3`}>Заказать консультацию</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >

                    <Link to={'#'}> <img
                        className="d-block w-100"
                        src={img}
                        alt="Second slide"
                    /></Link>

                    <Carousel.Caption>
                        <div className={`${style.textMain}`}>
                            <div className='w-100'>
                                <h3 className={`${style.h3text}`}>
                                    <div><span>Дизайн, изготовление мебели</span></div>
                                    <span> и интерьера на заказ
                                </span></h3>
                            </div>
                            <div className='w-70'>
                                <div className={`${style.ptext}`}>
                                    <div><span className={`${style.pspan}`}>Создаем уникальные интерьеры и мебель премиум</span>
                                    </div>
                                    <span className={`${style.pspan}`}> класса в Москве и
                                Санкт-Петербурге</span></div>
                            </div>
                            <button className={`${style.buttonCarusel} mt-3`}>Заказать консультацию</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to={'#'}> <img
                        className="d-block w-100"
                        src={img}
                        alt="Third slide"
                    /></Link>
                    <Carousel.Caption>
                        <div className={`${style.textMain}`}>
                            <div className='w-100'>
                                <h3 className={`${style.h3text}`}>
                                    <div><span >Дизайн, изготовление мебели</span></div>
                                    <span> и интерьера на заказ
                                </span></h3>
                            </div>
                            <div className='w-70'>
                                <div className={`${style.ptext}`}>
                                    <div><span className={`${style.pspan}`}>Создаем уникальные интерьеры и мебель премиум</span>
                                    </div>
                                    <span className={`${style.pspan}`}> класса в Москве и
                                Санкт-Петербурге</span></div>
                            </div>
                            <button className={`${style.buttonCarusel} mt-3`}>Заказать консультацию</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusel;