import React, {useContext} from 'react';
import style from "../../style/popular.module.css";
import armchair from "../../img/imgLastWorks/image 28.png";
import bed from "../../img/imgLastWorks/image 27.png";
import pouf from "../../img/imgLastWorks/image 29.png";
import chair from "../../img/imgLastWorks/image 26.png";
import {context} from "../utils/context";
import {Link} from "react-router-dom";

const LastWorks = () => {
    const {windowWidth} = useContext(context);
    return (
        <div className='container'>
            <h2 className={`${style.h2Text} text-center pt-5 pb-4`}>Наши последние работы</h2>
            <div className='row text-center'>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0 '>
                    <Link to={`#`}>  <img className='col-12' src={armchair} alt='armchair'/></Link>
                    <div className={`${style.textName} mt-3 mb-0 mb-lg-0 mb-sm-2`}>Диван эксклюзивный
                        <br/> SD-313
                    </div>
                    <p className={`${style.textPrice}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <Link to={`#`}> <img className='col-12' src={chair} alt='chair'/></Link>
                    <div className={`${style.textName} mt-3 mb-0 mb-lg-0 mb-sm-2`}>Кресло замшевое
                        <br/> SD-313
                    </div>
                    <p className={`${style.textPrice} mb-0 align-self-end`}>8 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <div className='align-content-between h-100'>
                        <Link to={`#`}> <img className='col-12' src={bed} alt='bed'/></Link>
                        <div className={`${style.textName} mt-3 mb-0 mb-lg-0 mb-sm-2`}>Кровать “Марсель”
                            <br/> SD-313
                        </div>
                        <p className={`${style.textPrice} `}>8 000 руб.</p>
                    </div>
                </div>
                <div className='col-lg-3 col-xl-3 col-sm-6 col-6 p-0'>
                    <Link to={`#`}><img className='col-12' src={pouf} alt='pouf'/></Link>
                    <div className={`${style.textName} mt-3 mb-0 mb-lg-0 mb-sm-2`}>Пуф эксклюзивный
                        <br/> SD-313
                    </div>
                    <p className={`${style.textPrice} mb-0`}>10 000 руб.</p>
                    <p className={`${style.textSale}`}>10 000 руб.</p>
                </div>

            </div>

            <div className='text-center '>
                {windowWidth > 550 ?
                    <button className={`${style.buttonLastWorks} mb-5 mt-3`}>Смотреть все </button> :
                    <button className={`${style.buttonLastWorks} mb-4 mt-3`}>Смотреть еще </button>}
            </div>
        </div>
    );
};

export default LastWorks;