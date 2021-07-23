import React, {useContext} from 'react';
import style from "../../style/categories.module.css";
import {context} from "../utils/context";

const Consultation = () => {
    const {windowWidth} = useContext(context);
    return (
        <div className={`${style.backCategories} text-center `}>
            <h2 className={windowWidth > 550 ? `${style.h2TextConsultation} pt-5` : `${style.h2TextConsultation} pt-2 `}>Получите
                бесплатную консультацию</h2>
            {windowWidth > 550 ?
                <div className={`${style.textConsultation} pt-3`}>Расскажите о вашей идее или покажите пример – мы
                    подготовим детальный расчет и
                    <p>предложим свои идеи по реализации.</p>
                </div> :
                <div className={`${style.textConsultation} pt-3`}>Расскажите о вашей идее или покажите пример –<p
                    className='mb-0'> мы
                    подготовим детальный расчет и
                    предложим свои</p> <p className=''> идеи по реализации.</p>
                </div>}
            <div className='pt-3'>
                {windowWidth > 550 ?
                    <button className={`${style.buttonConsultation} mb-5 `}>Заказать консультацию</button> :
                    <button className={`${style.buttonConsultation} mb-3`}>Получить консультацию</button>
                }
            </div>
        </div>
    );
};

export default Consultation;