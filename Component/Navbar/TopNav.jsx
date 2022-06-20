import React from 'react';
import style from "../../styles/Navbar.module.css";
import SearchIcon from "../../public/TopNavIconS/searchIcon.svg";
import ProfileIcon from "../../public/TopNavIconS/ProfileIcon.svg";
import AddCart from "../../public/TopNavIconS/AddCart.svg";
import CartIcon from "../../public/TopNavIconS/CartIcon.svg";

const TopNav = () => {
    return (
        <div className={style.title}>
            <p>TANN TRIM</p>
            <div className={style.TopIconsWrapper}>
                <SearchIcon/>
                <ProfileIcon/>
                <AddCart/>
                <CartIcon/>
            </div>
        </div>
    );
};

export default TopNav;