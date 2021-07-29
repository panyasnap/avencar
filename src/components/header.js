import React, {useEffect, useState} from 'react';
import logo from '../footerImg/ЛОГОТИП (1) 2.svg';
import style from '../style/header.module.css';
import lupa from '../img/imgHeader/lupa.svg';
import {Link} from "react-router-dom";
import {aboutUs, design, furniture, mainPage} from "./utils/constans";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'


const Header = () => {
    // const [spb, setSpb] = useState('Москва');
    const [showInput, setShowInput] = useState(false);
    const [open, setClose] = useState(false);
    const array = ['Москва', 'Санкт-Петербург'];
    const [value, setValue] = useState(array[0]);
    // const [line, setLine] = useState(false)
    const [page, setPage] = useState('main');
    // const handleChangeLine = () => {
    //     setLine(true)
    // }
    // const changeActivePage = () => {
    //     setPage('main')
    //
    // }
    // const handleChangeSpb = () => {
    //     setSpb(true);
    //
    // }
    // const handleChangeMsk = () => {
    //     setSpb(false)
    // }
    useEffect(() => {

        document.addEventListener('mousedown', closeInputHandler)
        // document.addEventListener('mousedown', setClose(!open))

    }, [])
    // const closeMenu =() => {
    //     setClose(false)
    // }
    const handler = (event) => {
        // changing the state to the name of the key
        // which is pressed
        if (event.keyCode === 27) {
            setShowInput(false)

        }
    };

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

                    <div className={page === 'main' ? `${style.linkHover} pb-3 ml-5 ` : ' pb-3 ml-5'}>
                        <Link onClick={() => setPage('main')}
                              className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}
                              to={`/${mainPage}`
                              }>
                            Главная</Link>
                        {/*<hr className={page === 'main' ? `${style.hrStyleClick}  p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={page === 'about' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                        <Link to={`/${aboutUs}`} onClick={() => setPage('about')}
                              className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>
                            О нас</Link>
                        {/*<hr className={page === 'about' ? `${style.hrStyleClick}  p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={page === 'furniture' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                        <Link onClick={() => setPage('furniture')}
                              className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}
                              to={`/${furniture}`}>
                            Мебель</Link>
                        {/*<hr className={page === 'furniture' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>

                    <div className={page === 'design' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                        <Link to={`/${design}`} onClick={() => setPage('design')}
                              className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>{showInput ?
                            'Услуги' : ' Дизайн интерьера'}</Link>
                        {/*<hr className={page === 'design' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={page === 'portfolio' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                        <Link to={'#'} onClick={() => setPage('portfolio')}
                              className={showInput ? `${style.linkStyleDark}` : `${style.linkStyle}`}>
                            Портфолио</Link>
                        {/*<hr className={page === 'portfolio' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : null}>
                        <div className={page === 'blog' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                            <Link to={'#'} onClick={() => setPage('blog')}
                                  className={`${style.linkStyle}`}>
                                Блог</Link>
                        </div>
                        {/*<hr className={page === 'blog' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={showInput ? `${style.displayDiv}` : null}>
                        <div className={page === 'sale' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                            <Link to={'#'} onClick={() => setPage('sale')}
                                  className={`${style.linkStyle}`}>
                                Акции</Link>
                        </div>
                        {/*<hr className={page === 'sale' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <div className={showInput ? `${style.displayDiv} mr-3` : ` `}>
                        <div className={page === 'contact' ? `${style.linkHover} pb-3 ` : ' pb-3'}>
                            <Link to={'#'} onClick={() => setPage('contact')}
                                  className={`${style.linkStyle}`}>
                                Контакты</Link></div>
                        {/*<hr className={page === 'contact' ? `${style.hrStyleClick} p-0 mt-0` : `${style.hrStyle} p-0 mt-0`}/>*/}
                    </div>
                    <form>
                        <input onKeyDown={handler}
                               className={showInput ? `${style.inputHeader}  mb-3  mr-0` : `${style.displayDiv}  p-0 mr-0 ml-0 mb-3`}
                               placeholder='  Поиск...'/>
                    </form>
                    <div className={`${style.imgInput} h-100 mr-1 pb-4`} onClick={InputHandler}>
                        <img className='' src={lupa} alt='lupa'/>
                    </div>
                    <div>
                        <div className={``}>
                            <div className={showInput ? `${style.selectDarkText}` : `${style.selectHeader}`}
                                 onClick={() => setClose(!open)}>
                                {value}{!open ?
                                <BsChevronDown
                                    className={showInput ? `${style.selectDarkiconSize} ml-1` : `${style.iconSize} mt-2 ml-1`}/> :
                                <BsChevronUp className={`${style.iconSize} mt-2 ml-1`}/>}
                                <ul  className={`selectUl ${open ? 'active' : 'close'}`}>
                                    {array.map(item =>
                                        <li key={item}
                                            className={value === 'Москва' ? `${style.selectLI}` : `${style.selectLISpb}`}>
                                                <span onClick={() => {
                                                    setValue(item)
                                                    setClose(false)
                                                }} className={`${style.selectSpan} m-0`}>{item}</span></li>)}
                                </ul>
                            </div>
                            <div>

                                <div
                                    className={showInput ? `${style.selectDarkInput} pb-3` : 'pb-3'}>{value === 'Москва' ? '+7 926 603 58 79' : '+7 921 322 21 76'}</div>
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