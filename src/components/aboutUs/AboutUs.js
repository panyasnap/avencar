import React from 'react';
import {Link} from "react-router-dom";
import styleLink from "../../style/furniture.module.css";
import {mainPage} from "../utils/constans";
import chair from '../../img/AboutUsImg/image 33.svg';
import bed from '../../img/AboutUsImg/image 36.svg';
import chairMin from '../../img/AboutUsImg/image 37.svg';
import style from '../../style/aboutUs.module.css';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='row pt-3 pl-2'><Link className={`${styleLink.linkMain}`}
                                                 to={mainPage}>Главная</Link>
                <div className='pl-2 pr-2'>/</div>
                <div className={`${styleLink.furnitureText}`}>О нас</div>
            </div>
            <h2 className={`${style.h3text} text-center mb-4 mt-4`}>О нас</h2>
            <div className='row'>
                <div className='col-12 col-lg-5 col-sm-5  pl-sm-0 pl-lg-0'>
                    <img className='w-100 mt-2 p-0' src={chair} alt='chair'/>
                    <div className='row mt-4 mb-5'>
                        <div className='col-7 '><img className={`${style.imgBedWidth} `} src={bed} alt='bed'/></div>
                        <div className='col-5 '><img className={`${style.imgChairsWidth}`} src={chairMin} alt='chair'/>
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-lg-7 col-sm-7 mt-2`}>
                    <p className={`${style.spanP} col-12`}>Создание уникальных интерьеров — то, чему наша
                        команда посвятила свою деятельность
                        2008 году,
                        организовав студию Дизайна.</p>

                    <p className={`${style.spanP} col-12`}>Однако довольно быстро мы столкнулись с тем, что придумать и
                        отрисовать интерьер — это далеко не
                        самая сложная задача. Воплотить в жизнь картину максимально близко к визуализации оказалось
                        задачей
                        куда посложнее, так как за выполнение нестандартных проектов мебели или элементов интерьера
                        может
                        взяться не каждое производств
                        Придумать и нарисовать интерьер это далеко не самая сложная задача, с которой работает Дизайнер.
                        Воплотить в жизнь картину максимально близко к нарисованной — задача куда сложнее, так как за
                        выполнение нестандартных, уникальных проектов мебели или элементов интерьера может взяться не
                        каждое
                        производство.</p>

                    <p className={`${style.spanP} col-12`}>Так мы начали развивать свое собственное мебельное производство
                        мебели, которое успешно работает до
                        сих пор.</p>

                    <p className={`${style.spanP} col-12`}> На сегодняшний день наша команда выполняет проекты любой сложности
                        по всей стране:
                    </p>
                    <p className={`${style.spanP} col-12`}>
                        Проектирование интерьеров квартир, коттеджей, ресторанов, офисов
                        Проектирование, визуализация, изготовление мебели, как с помощью технических программ, так и в
                        ручной эскизной технике
                        Разработка стилистического решения и изготовление элементов декора (лепнина, кованые элементы)
                        согласно дизайн-проекту интерьера Заказчика
                        Мы работаем только с материалами от проверенных поставщиков. Мы не используем «дешевый» и
                        некачественный материал</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;