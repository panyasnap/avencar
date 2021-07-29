import React, {useState} from 'react';
import style from '../style.mobil/burger.module.css'
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {aboutUs, mainPage} from "./utils/constans";
import {Link} from "react-router-dom";

const BurgerMenu = (props) => {
    const [open, setClose] = useState(false);
    // useEffect(() => {
    //
    //     document.addEventListener('mouseout', props.closeBurgerMenu)
    //     // document.addEventListener('mousedown', setClose(!open))
    //
    // }, [])
    return (
        <div>
            <nav className={`headerMenu ${props.openBurger ? 'is-nav-open' : null} pt-3`}>
                <div className='container pb-4'>
                    <div className={`${style.burgerBackground} ml-2  pt-4 `}>

                        <div onClick={() => {
                            props.closeBurgerMenu()
                        }} className='mb-4'><Link className={`${style.linkStyle}`} to={`/${mainPage}`}>Главная</Link>
                        </div>
                        <div onClick={() => {
                            props.closeBurgerMenu()
                        }} className='mb-4'><Link to={`/${aboutUs}`} className={`${style.linkStyle}`}>О нас</Link></div>
                        <div className='mb-4'><Link to={`#`} className={`${style.linkStyle}`}>Мебель</Link></div>
                        <div onClick={() => setClose(!open)} className='mb-4'><Link to={`#`} className={`${style.linkStyle}`}>дизайн интерьера</Link>
                            {!open ?
                                <BsChevronDown className={`${style.chevron} ml-2`}/> :
                                <BsChevronUp className={`${style.chevron} ml-2`}/>}
                            <div className={`burgerUl ${open ? 'active' : 'close'}`}>
                                <div className={`${style.burgerSelect} mt-3`}>
                                    <Link to={`#`} className={`${style.linkStyle}`}><div className='m-3 ml-2'>Дизайн 1</div></Link>
                                    <Link to={`#`} className={`${style.linkStyle}`}><div className='m-3 ml-2'>Дизайн 2</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'><Link to={`#`} className={`${style.linkStyle}`}>портфолио</Link></div>
                        <div className='mb-4'><Link to={`#`} className={`${style.linkStyle}`}>блог</Link></div>
                        <div className='mb-4'><Link to={`#`} className={`${style.linkStyle}`}>акции</Link></div>
                        <div className=' mb-4'><Link to={`#`} className={`${style.linkStyle}`}>контакты</Link></div>
                    </div>
                    <form>
                    <input className={`${style.inputBurger} mb-2 pl-3`}/>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default BurgerMenu;