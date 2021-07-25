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
                                    <div>
                                        <p className={`mb-0 ${style.textPhone}`}>Мск +7 926 603 58 79</p>
                                        <p className={`mb-0 ${style.textPhone}`}> СПб +7 921 322 21 76</p>
                                        <p className={`${style.textPhoneRing}`}>Заказать звонок</p>

                                    </div>

                                    <div className={`${style.textInfoPhone}`}>График работы:
                                        <p className='pWeigth'>пн-пт 9.00-19.00</p>
                                    </div>
                                    <div className={`${style.textInfoPhone}`}>E-mail:
                                        <p className={`${style.textPhone}`}>avencarstudio@mail.ru</p>
                                    </div>
                                    <div className='pWeigth'><span
                                        className={`${style.textAddressBold} p-0`}>Адрес шоу-рума:</span> г.
                                        Москва, <p className={`${style.textAddress} mb-0`}>ул. Люблинская, 40,
                                            оф.209</p>
                                        <p className={`${style.textAddress}`}>(по предварительной записи)</p>
                                    </div>
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
                                                <hr className={`${style.line23} w-25 ml-0 pt-0 mt-0 mb-1`}/>
                                                <div className={`${style.textHelp}`}>мебели от эскиза <p
                                                    className={`${style.textHelp}`}>до 3D модели</p></div>
                                            </div>
                                        </div>
                                        <div className='pt-4 '><p className={`${style.textServices} mb-2`}>Услуги</p>
                                            <hr className='mt-0 mb-1'/>
                                            <p className={`${style.textInfo} m-0`}>Изготовление мебели</p>
                                            <p className={`${style.textInfo} m-0`}>Дизайн интерьера</p>

                                        </div>

                                    </div>
                                    <div className=' col-3'>
                                        <div className='row'>
                                            <img className='col-5 w-100 h-100' src={delivery} alt='delivery'/>
                                            <div className='col-7 pl-0'>
                                                <p className={`${style.textH2} mb-0`}>Доставка</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-1'/>
                                                <p className={`${style.textHelp}`}>по всей России</p>
                                            </div>
                                        </div>
                                        <div className={`${style.marginServices} pt-5`}>
                                            <p className={`${style.textServicesFurniture} mb-2`}>Мебель</p>
                                            <hr className='mt-0 mb-2'/>
                                            <p className={`${style.textInfo} m-0`}>Диваны, кушетки</p>
                                            <p className={`${style.textInfo} m-0`}>Кровати</p>
                                            <p className={`${style.textInfo} m-0`}>Кресла</p>
                                            <p className={`${style.textInfo} m-0`}>Стулья</p>
                                            <p className={`${style.textInfo} m-0`}>Пуфы, банкетки</p>
                                            <div className={`${style.textInfo} m-0`}>Изголовья, стеновые <p
                                                className={`${style.textInfo}`}>панели</p></div>

                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <div className='row'>

                                            <img className='col-5 w-100 h-100' src={assembly} alt='assembly'/>
                                            <div className='col-7 pl-0 pb-2'>
                                                <p className={`${style.textH2} mb-0`}>Сборка</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-1'/>
                                                <div className={`${style.textHelp}`}>нашими <p
                                                    className={`${style.textHelp}`}>материалами</p></div>
                                            </div>
                                        </div>
                                        <div className={` ${style.marginServices} mt-4 mt-sm-2 pt-sm-3 pt-lg-3 pt-xl-0 mt-lg-4`}>
                                            <p className={`${style.textServices}  mb-lg-2 mb-sm-1 mb-1`}>Дизайн</p>
                                            <hr className='w-50 ml-0 mt-0 mb-2'/>
                                            <p className={`${style.textInfo} m-0`}>Портфолио</p>
                                            <p className={`${style.textInfo} m-0`}>Стоимость</p>

                                        </div>

                                    </div>
                                    <div className='col-3'>
                                        <div className='row'>
                                            <img className='col-5 w-100 h-100 ' src={guarantee} alt='guarantee'/>
                                            <div className='col-7 pl-0'>
                                                <p className={`${style.textH2} mb-0`}>Гарантия и сервис</p>
                                                <hr className='w-25 ml-0 pt-0 mt-0 mb-1'/>
                                                <p className={`${style.textHelp}`}>гарантия 10 лет</p>
                                            </div>
                                        </div>
                                        <div className='pt-5'><p className={`${style.textServices} mb-2`}>О нас</p>
                                            <hr className='mt-0 mb-2'/>
                                            <p className={`${style.textInfo} m-0`}>Контакты</p>
                                            <p className={`${style.textInfo} m-0`}>Как мы работаем</p>
                                            <div className={`${style.textInfo} m-0`}>Доставка, гарантия
                                                <p className={`${style.textInfo} m-0`}>и оплата</p></div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-3'>
                        <div className={`${style.textHelpBottom} m-0 pb-5`}>© Авенкар, 2020. Все права защищены.
                            Предложения,
                            размещенные на сайте, не являются <p className={`${style.textHelp} m-0`}>публичной
                                офертой.
                                Запрещается копирование информации сайта без письменного согласия</p> правообладателя
                        </div>
                    </div>

                </div> :
                <div className={`${style.footerBack}`}>
                    <div className={` jumbotron-fluid d-flex`}>

                        <div className='container'>

                            <div className='pt-5 '>
                                <div className='w-100'>
                                    <img className={`${style.imgLogo} w-100 justify-content-center pb-5`} src={logo}
                                         alt='logo'/></div>
                                <div className='row justify-content-between'>
                                    <div className='mb-0 col-12 col-sm-4 pWeigth'>
                                        <p className={`mb-0 ${style.textPhone}`}>Мск +7 926 603 58 79</p>
                                        <p className={`mb-0 ${style.textPhone}`}> СПб +7 921 322 21 76</p>
                                        <p className={`${style.textPhoneRing}`}>Заказать звонок</p>

                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className={`${style.textInfoPhone}`}>График работы:
                                            <p className={`${style.textAddress} `}>пн-пт 9.00-19.00</p>
                                        </div>
                                        <div className={`${style.textInfoPhone}`}>Mail:
                                            <p className={`${style.textPhone}`}>avencarstudio@mail.ru</p>
                                        </div>
                                    </div>
                                    <div className='pWeigth col-12 col-sm-4'><span
                                        className={`${style.textAddressBold} p-0`}>Адрес шоу-рума:</span> г.
                                        Москва, <p className={`${style.textAddress} mb-0`}>ул. Люблинская, 40,
                                            оф.209</p>
                                        <p className={`${style.textAddress}`}>(по предварительной записи)</p>

                                        <div className='row'>
                                            <img className='mr-1 pl-3 ' src={insta} alt='inst'/>
                                            <img className='m-1' src={vk} alt='vk'/>
                                            <img className='m-1' src={fb} alt='fb'/>
                                            <img className='m-1' src={pin} alt='pin'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }</div>
    );
};

export default Footer;