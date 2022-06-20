import React from 'react';
import Bag from "../../public/Bag.svg";
import SecondIcon from "../../public/SecondIcon.svg";
import ThirdBagIcon from "../../public/thirdBagIcon.svg";
import FourBagIcon from "../../public/FourBagIcon.svg";
import FiveBagIcon from "../../public/FiveBagIcon.svg";
import SixBagIcon from "../../public/SixBagIcon.svg";
import SevenBagIcon from "../../public/SevenBagIcon.svg";
import EightBagIcon from "../../public/EightBagIcon.svg";
import NineBagIcon from "../../public/NineBagIcon.svg";
import style from '../../styles/NavIcon.module.css';

const NavIcon = () => {
    return (
            <div className={style.IconsWrapper}>
                <div className={style.bagIcon1}>
                    <Bag/>
                </div>
                <div className={style.bagIcon1}>
                    <SecondIcon/>
                </div>
                <div className={style.bagIcon1}>
                    <ThirdBagIcon/>
                </div>
                <div className={style.bagIcon2}>
                    <FourBagIcon/>
                </div>
                <div className={style.bagIcon2}>
                    <FiveBagIcon/>
                </div>
                <div className={style.bagIcon2}>
                    <SixBagIcon/>
                </div>
                <div className={style.bagIcon1}>
                    <SevenBagIcon/>
                </div>
                <div className={style.bagIcon2}>
                    <EightBagIcon/>
                </div>
                <div className={style.bagIcon2}>
                    <NineBagIcon/>
                </div>
            </div>
    );
};

export default NavIcon;