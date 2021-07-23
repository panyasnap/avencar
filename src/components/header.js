import React, {useState} from 'react';
import logo from '../img/imgHeader/ЛОГОТИП (1) 2.png';
import style from '../style/header.module.css';
import lupa from '../img/imgHeader/lupa.svg';
import {Link} from "react-router-dom";
import {furniture, mainPage} from "./utils/constans";

const Header = () => {
    const [spb, setSpb] = useState(false);
    const [showInput, setShowInput] = useState(false);


    const handleChange = () => {
        spb ? handleChangeMsk() : handleChangeSpb()
    }
    const handleChangeSpb = () => {
        setSpb(true);

    }
    const handleChangeMsk = () => {
        setSpb(false)
    }

    const showInputHandler = () => {
        setShowInput(true)
    }
    const closeInputHandler = () => {
        setShowInput(false)
    }
    const InputHandler = () => {
        showInput ? closeInputHandler() : showInputHandler()
    }
    return (
        <div
            className={showInput ? `${style.headerInputBack} jumbotron-fluid d-flex` : `${style.headerBack} jumbotron-fluid d-flex`}>
            <div className='container '>
                <div className='row justify-content-between align-items-end'>
                    <div className={` mt-2 ${style.imgDark}`}>
                        <img className={`${style.imgSize} mt-1`} src={logo} alt='logo'/>
                    </div>
                    <div className={showInput ? `${style.divDark}` : `${style.displayDiv}`}>

                    </div>
                    <div className='ml-5'><Link className={`${style.linkStyle}`} to={`/${mainPage}`}>
                        Главная</Link>
                    </div>
                    <div>
                        О нас
                    </div>
                    <div ><Link className={`${style.linkStyle}`} to={`/${furniture}`}>
                        Мебель</Link>
                    </div>
                    <div>
                        Дизайн интерьера
                    </div>
                    <div>
                        Портфолио
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : null}>
                        Блог
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : null}>
                        Акции
                    </div>
                    <div className={showInput ? `${style.displayDiv} mr-3` : 'mr-3'}>
                        Контакты
                    </div>
                    <input className={showInput ? `${style.inputHeader} ` : `${style.displayDiv} `}/>
                    <div className={`${style.imgInput}`} onClick={InputHandler}>
                        <img src={lupa} alt='lupa'/>
                    </div>
                    <div>

                        <select className={showInput ? `${style.selectDark}` : null} onChange={handleChange}>
                            <option className={`${style.selectLine} p-3`} value='Msk'>Москва</option>
                            <option className={`${style.selectLine} p-3`} value='spb'>Санкт-Петербург</option>
                        </select>
                        {!spb ?
                            <div>+7 926 603 58 79</div> :
                            <div>+7 921 322 21 76</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;