import React, {useContext} from 'react';
import style from "../style/footer.module.css";
import logo from '../footerImg/ЛОГОТИП (1) 2.svg';
import write from '../footerImg/Group 53.svg';
import delivery from '../footerImg/Group 54.svg';
import assembly from '../footerImg/Group 55.svg';
import guarantee from '../footerImg/Group 56.svg';
import insta from '../footerImg/instr.svg';
import vk from '../footerImg/Vector.svg';
import fb from '../footerImg/fb.svg';
import pin from '../footerImg/Vector (1).svg';
import {context} from "./utils/context";

const Footer = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            {windowWidth > 1000 ?
                <div className={`${style.footerBack}`}>
                    <div className={` jumbotron-fluid d-flex`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3 pt-5 pb-5'>
                                    <img className='pb-5' src={logo} alt='logo'/>
                                    <p className='mb-0 pWeigth'>
                                        Мск +7 926 603 58 79
                                        <p className='mb-0 pWeigth'> СПб +7 921 322 21 76</p>
                                        <p className={`${style.textPhone}`}>Заказать звонок</p>

                                    </p>

                                    <p className={`${style.textInfo}`}>График работы:
                                        <p className='pWeigth'>пн-пт 9.00-19.00</p>
                                    </p>
                                    <p className={`${style.textInfo}`}>E-mail: <p
                                        className='pWeigth'>avencarstudio@mail.ru</p>
                                    </p>
                                    <p className='pWeigth'><span
                                        className={`${style.textInfo} p-0`}>Адрес шоу-рума:</span> г.
                                        Москва, <p className='pWeigth'>ул. Люблинская, 40, оф.209</p>
                                        (по предварительной записи)
                                    </p>
                                    <div className='row'>
                                        <img className='m-1 ml-3' src={insta} alt='inst'/>
                                        <img className='m-1' src={vk} alt='vk'/>
                                        <img className='m-1' src={fb} alt='fb'/>
                                        <img className='m-1' src={pin} alt='pin'/>
                                    </div>
                                </div>


                                <div className={`${style.footerItems} col-9 row mt-5 pt-5 justify-content-between`}>
                                    <div className='col-3 '>
                                        <div className='row'>
                                            <img className='col-5 w-100 h-100 ' src={write} alt='write'/>
                                            <div className='col-7 pl-0 pb-2'>
                                                <p className={`${style.textH2} mb-0 `}>Проектирование</p>
                                                <hr className={`${style.line23} w-25 ml-0 pt-0 mt-0 mb-2`}/>
                                                <p className={`${style.textHelp}`}>мебели от эскиза <p
                                                    className={`${style.textHelp}`}>до 3D модели</p></p>
                                            </div>
                                        </div>
                                        <div className='pt-4 '><p className={`${style.textServices} mb-1`}>Услуги</p>
                                            <hr className='mt-0'/>
                                            <p className={`${style.textInfo} m-0`}>Изготовление мебели</p>
                                            <p className={`${style.textInfo} m-0`}>Дизайн интерьера</p>

                                        </div>

                                    </div>
                                    <div className=' col-3'>
                                        <div className='row'>
                                            <img className='col-5 w-100 h-100' src={delivery} alt='delivery'/>
                                            <div className='col-7 pl-0'>
                                                <p className={`${style.textH2} mb-0`}>Доставка</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-2'/>
                                                <p className={`${style.textHelp}`}>по всей России</p>
                                            </div>
                                        </div>
                                        <div className={`${style.marginServices} pt-5`}>
                                            <p className={`${style.textServices} mb-1`}>Мебель</p>
                                            <hr className='mt-0'/>
                                            <p className={`${style.textInfo} m-0`}>Диваны, кушетки</p>
                                            <p className={`${style.textInfo} m-0`}>Кровати</p>
                                            <p className={`${style.textInfo} m-0`}>Кресла</p>
                                            <p className={`${style.textInfo} m-0`}>Стулья</p>
                                            <p className={`${style.textInfo} m-0`}>Пуфы, банкетки</p>
                                            <p className={`${style.textInfo} m-0`}>Изголовья, стеновые <p
                                                className={`${style.textInfo}`}>панели</p></p>

                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <div className='row'>

                                            <img className='col-5 w-100 h-100' src={assembly} alt='assembly'/>
                                            <div className='col-7 pl-0 pb-2'>
                                                <p className={`${style.textH2} mb-0`}>Сборка</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-2'/>
                                                <p className={`${style.textHelp}`}>нашими <p
                                                    className={`${style.textHelp}`}>материалами</p></p>
                                            </div>
                                        </div>
                                        <div className={` ${style.marginServices} mt-4`}>
                                            <p className={`${style.textServices}  mb-1`}>Дизайн</p>
                                            <hr className='w-50 ml-0 mt-0'/>
                                            <p className={`${style.textInfo} m-0`}>Портфолио</p>
                                            <p className={`${style.textInfo} m-0`}>Стоимость</p>

                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <div className='row'>

                                            <img className='col-5 w-100 h-100 ' src={guarantee} alt='guarantee'/>
                                            <div className='col-7 pl-0'>
                                                <p className={`${style.textH2} mb-0`}>Гарантия и сервис</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-2'/>
                                                <p className={`${style.textHelp}`}>гарантия 10 лет</p>
                                            </div>
                                        </div>
                                        <div className='pt-5'><p className={`${style.textServices} mb-1`}>О нас</p>
                                            <hr className='mt-0'/>
                                            <p className={`${style.textInfo} m-0`}>Контакты</p>
                                            <p className={`${style.textInfo} m-0`}>Как мы работаем</p>
                                            <p className={`${style.textInfo} m-0`}>Доставка, гарантия
                                                <p className={`${style.textInfo} m-0`}>и оплата</p></p>

                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='text-center pt-3'>
                        <p className={`${style.textHelp} m-0 pb-5`}>© Авенкар, 2020. Все права защищены. Предложения,
                            размещенные на сайте, не являются <p className={`${style.textHelp} m-0`}>публичной
                                офертой.
                                Запрещается копирование информации сайта без письменного согласия</p> правообладателя
                        </p>
                    </div>

                </div> :
                <div className={`${style.footerBack}`}>
                    <div className={` jumbotron-fluid d-flex`}>

                        <div className='container'>

                            <div className='pt-5 pb-5'>
                                <div className='w-100'>
                                    <img className={`${style.imgLogo} w-100 justify-content-center pb-5`} src={logo}
                                         alt='logo'/></div>
                                <div className='row justify-content-between'>
                                    <p className='mb-0 col-sm-4 col-12 pWeigth'>
                                        Мск +7 926 603 58 79
                                        <p className='mb-0 pWeigth'> СПб +7 921 322 21 76</p>
                                        <p className={`${style.textPhone}`}>Заказать звонок</p>

                                    </p>

                                    <p className={`${style.textInfo} col-sm-4 col-12`}>График работы:
                                        <p className='pWeigth'>пн-пт 9.00-19.00</p>

                                        <p className={`${style.textInfo}`}>Mail: <p
                                            className='pWeigth'>avencarstudio@mail.ru</p>
                                        </p>
                                    </p>
                                    <p className='pWeigth col-sm-4 col-12'><span
                                        className={`${style.textInfo} p-0`}>Адрес шоу-рума:</span> г.
                                        Москва, <p className='pWeigth'>ул. Люблинская, 40, оф.209</p>
                                        (по предварительной записи)

                                        <div className='row'>
                                            <img className='mr-1 pl-3 ' src={insta} alt='inst'/>
                                            <img className='m-1' src={vk} alt='vk'/>
                                            <img className='m-1' src={fb} alt='fb'/>
                                            <img className='m-1' src={pin} alt='pin'/>
                                        </div></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }</div>
    );
};

export default Footer;