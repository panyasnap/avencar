import React from 'react';
import logo from '../../../imgMobil/imgHeaderMob/Слой x0020 1 0.svg';
import phone from '../../../imgMobil/imgHeaderMob/ant-design_phone-outlined.svg'
import style from '../../../style.mobil/HeaderMob.module.css';

const HeaderMobil = () => {
    return (
        <div className={`${style.headerBack}`}>
            <div className=' container'>
                <div className='row d-flex justify-content-between align-items-center pt-2'>

                        <div className={`${style.headerBurger} `}>
                            <span/>
                        </div>
                        <div className=''>
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className='pr-4'>
                            <img src={phone} alt='phone'/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobil;