import React from 'react';
import {Link} from "react-router-dom";
import styleLink from "../../style/furniture.module.css";
import {mainPage} from "../utils/constans";
import room from '../../img/imgDesign/image 38.svg';
import style from '../../style/design.module.css';
// import drawing from '../../img/imgDesign/image 52.svg';
// import drawing1 from '../../img/imgDesign/image 53.svg';

const Design = () => {
    return (
        <div className='jumbotron-fluid'>
            <div className='container'>
                <div className='row pt-3 pl-2'><Link className={`${styleLink.linkMain}`}
                                                     to={mainPage}>Главная</Link>
                    <div className='pl-2 pr-2'>/</div>
                    <div className={`${styleLink.linkMain}`}>Услуги</div>
                    <div className='pl-2 pr-2'>/</div>
                    <div className={`${styleLink.furnitureText}`}>Дизайн интерьера</div>
                </div>
                <div>
                    <h2 className={`text-center ${style.texth2} mt-4 `}>Дизайн интерьера</h2>
                    <hr className={`${style.hrLine}`}/>
                    <p className={`text-center mb-0 ${style.textp}`}>Создаем индивидуальный дизайн интерьера в
                        квартирах, офисах, коттеджах и
                        домах.</p>
                    <p className={`text-center mb-4 ${style.textp}`}> Сопровождаем проект
                        на всех стадиях и добиваемся идеального воплощения вашей задумки.
                    </p>
                </div>
                <div className='row mb-5'>
                    <div className='col-6 '><img className={`${style.imgSize}`} src={room} alt='room'/></div>
                    <div className='col-6 '><img className={`${style.imgSize}`} src={room} alt='room'/></div>
                </div>
            </div>
            <div className={`${style.background} pt-5`}>
                <h3 className={`${style.texth3} text-center`}>Сколько стоит дизайн-проект?</h3>
                <div className={`${style.parText} text-center`}><span
                    className={`${style.boldText}`}>2 000 руб.</span> кв.м. помещения
                </div>
            </div>
            {/*<div className='container'>*/}
            {/*    <h3 className={`${style.texth3} text-center mt-5 mb-4`}>Состав проекта</h3>*/}
            {/*    <div className='row justify-content-between'>*/}
            {/*        <div className={` col-4 `}>*/}
            {/*            <div className={` ${style.backgroundProjects} p-3`}>*/}
            {/*                <div className={`${style.h2Projects} text-center mb-3`}><span*/}
            {/*                    className={`${style.boldTextProjects}`}>1 Этап.</span> Планировка*/}
            {/*                </div>*/}
            {/*                <p className={`${style.textProjects} mb-0`}>*/}
            {/*                    Планировочные решения с расстановкой мебели и сантехнического оборудования.*/}
            {/*                    Знакомство Дизайнера с Заказчиком</p>*/}
            {/*                <ul className={`${style.textLiProjects}`}>*/}
            {/*                    <li> Заключение Договора на основе выбранной комплектации проекта</li>*/}
            {/*                    <li>Интервьюирование Заказчика по Анкете и составление ТЗ</li>*/}
            {/*                    <li>Обмер помещения и анализ</li>*/}
            {/*                    <li>Разработка концепции интерьера – коллажи на основе аналоговых интерьеров</li>*/}
            {/*                    <li> Согласование планировочного решения с выведением в объем</li>*/}
            {/*                </ul>*/}
            {/*                <div className={`${style.h2Projects} text-center mt-4 mb-3`}>Состав проекта</div>*/}
            {/*                <ol className={`liStyle`}>*/}
            {/*                    <li> Обмерный чертеж с привязкой инженерных коммуникаций</li>*/}
            {/*                    <li> Варианты планировочных решений (2-3 варианта, зависит от возможностей проекта)</li>*/}
            {/*                    <li> Итоговый план с расстановкой мебели и сантехнического оборудования</li>*/}
            {/*                    <li> План демонтажа стен и перегородок</li>*/}
            {/*                    <li> План монтажа стен и перегородок</li>*/}
            {/*                    <li> Размерный план после перепланировки</li>*/}
            {/*                    <li> Набор стилеобразующих коллажей для каждого помещения</li>*/}
            {/*                </ol>*/}
            {/*                <p className={`${style.pUnderline}`}><span*/}
            {/*                    className={`${style.boldText}`}> Срок выполнения:</span> 5-10 рабочих дней</p>*/}
            {/*                <div className={`${style.h2Projects} text-center`}>Примеры</div>*/}
            {/*                <img className='w-100' src={drawing} alt='drawing'/>*/}
            {/*                <img className='w-100' src={drawing1} alt='drawing'/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={`col-4 `}>*/}
            {/*            <div className={` ${style.backgroundProjects} `}></div>*/}
            {/*        </div>*/}
            {/*        <div className={`col-4 `}>*/}
            {/*            <div className={` ${style.backgroundProjects} `}></div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
};

export default Design;