import React, {useState} from 'react';
import logo from '../footerImg/ЛОГОТИП (1) 2.svg';
import style from '../style/header.module.css';
import lupa from '../img/imgHeader/lupa.svg';
import {Link} from "react-router-dom";
import {furniture, mainPage} from "./utils/constans";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

const Header = () => {
    // const [spb, setSpb] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [open, setClose] = useState(false);
    const array = ['Москва', 'Санкт-Петербург'];
    const [value, setValue] = useState(array[0])

    // const handleChange = () => {
    //     spb ? handleChangeMsk() : handleChangeSpb()
    // }
    // const handleChangeSpb = () => {
    //     setSpb(true);
    //
    // }
    // const handleChangeMsk = () => {
    //     setSpb(false)
    // }

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
                <div className='row justify-content-between align-items-end '>
                    <div className={`pt-2  ${style.imgDark}`}>
                        <img className={`${style.imgSize}  h-100 w-100 noPoint`} src={logo} alt='logo'/>
                    </div>
                    <div className={showInput ? `${style.divDark}` : `${style.displayDiv}`}>

                    </div>

                    <div className='ml-5 pb-2'><Link
                        className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}
                        to={`/${mainPage}`}>
                        Главная</Link>
                    </div>
                    <div className='pb-2'><Link to={'#'} className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>
                        О нас</Link>
                    </div>
                    <div className='pb-2'><Link className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}
                                                to={`/${furniture}`}>
                        Мебель</Link>
                    </div>
                    <div className='pb-2'><Link to={'#'} className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>
                        Дизайн интерьера</Link>
                    </div>
                    <div className='pb-2'><Link to={'#'} className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>
                        Портфолио</Link>
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : 'pb-2'}><Link to={'#'} className={`${style.linkStyle}`}>
                        Блог</Link>
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : 'pb-2'}><Link to={'#'} className={`${style.linkStyle}`}>
                        Акции</Link>
                    </div>
                    <div className={showInput ? `${style.displayDiv} mr-3` : 'mr-3 pb-2'}><Link to={'#'}
                        className={`${style.linkStyle}`}>
                        Контакты</Link>
                    </div>
                    <input className={showInput ? `${style.inputHeader} mb-1 ` : `${style.displayDiv} `}/>
                    <div className={`${style.imgInput} h-100 pb-2`} onClick={InputHandler}>
                        <img className='' src={lupa} alt='lupa'/>
                    </div>
                    <div>
                        <div className={`${style.linkStyle}`}>
                            {/*<select className={showInput ? `${style.selectDark}` : null} onChange={handleChange}>*/}
                            {/*    <option className={`${style.selectLine} p-3`} >Москва</option>*/}
                            {/*    <option className={`${style.selectLine} p-3`} >Санкт-Петербург</option>*/}
                            {/*</select>*/}

                            <div className={showInput ? `${style.selectDarkInput}` : `${style.selectHeader}`}
                                 onClick={() => setClose(!open)}>
                                {value} {!open ? <BsChevronDown className={`${style.iconSize} mt-2 ml-1`}/> :
                                <BsChevronUp className={`${style.iconSize} mt-2 ml-1`}/>}
                                <ul className={`selectUl ${open ? 'active' : 'close'}`}>
                                    {array.map(item =>
                                        <li key={item} className={`${style.selectLI}`}>
                                                <span onClick={() => {
                                                        setValue(item)
                                                        setClose(false)
                                                    }} className={`${style.selectSpan} m-0`}>{item}</span></li>)}
                                </ul>
                            </div>
                            <div>

                                <div
                                    className={showInput ? `${style.selectDarkInput}` : null}>{value === 'Москва' ? '+7 926 603 58 79' : '+7 921 322 21 76'}</div>
                            </div>

                        </div>
                        {/*{!spb ?*/}
                        {/*    <div>+7 926 603 58 79</div>*/}
                        {/*    :*/}
                        {/*    <div>+7 921 322 21 76</div>*/}
                        {/*}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;