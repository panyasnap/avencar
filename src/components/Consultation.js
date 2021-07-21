import React from 'react';
import style from "../style/categories.module.css";

const Consultation = () => {
    return (
        <div className={`${style.backCategories} text-center pb-5`}>
            <h2 className={`${style.h2TextConsultation} pt-5`}>Получите бесплатную консультацию</h2>
            <p className={`${style.textConsultation} pt-3`}>Расскажите о вашей идее или покажите пример – мы подготовим детальный расчет и
                <p>предложим свои идеи по реализации.</p>
            </p>
            <div className='pt-3'>
            <button className={`${style.buttonConsultation} `}>Заказать консультацию</button></div>
        </div>
    );
};

export default Consultation;