import React, {useState} from 'react';
import logo from '../../../imgMobil/imgHeaderMob/Слой x0020 1 0.svg';
import phone from '../../../imgMobil/imgHeaderMob/ant-design_phone-outlined.svg'
import style from '../../../style.mobil/HeaderMob.module.css';
import BurgerMenu from "../../burgerMenu";
import {Link} from "react-router-dom";

const HeaderMobil = () => {
    const [openBurger, setOpenBurger] = useState(false);

    const burgerMenu = () => {
        openBurger ? closeBurgerMenu() : openBurgerMenu()
    }
    const closeBurgerMenu = () => {
        setOpenBurger(false)

    }
    const openBurgerMenu = () => {
        setOpenBurger(true)

    }
    return (
        <div className={`${style.headerBack}`}>
            <div className=' container'>
                <div className='row d-flex justify-content-between align-items-center pt-2'>

                    <div className={`headerBurger mt-2 ${openBurger ? 'active ' : null}`} onClick={() => burgerMenu()}>
                        <span/>
                    </div>
                    <div className=''>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='mr-3 mt-2'>
                       <Link to={'#'}> <img src={phone} alt='phone'/></Link>
                    </div>

                </div>
            </div> {openBurger ? <BurgerMenu openBurger={openBurger} closeBurgerMenu={closeBurgerMenu}/> : null}
        </div>
    );
};

export default HeaderMobil;