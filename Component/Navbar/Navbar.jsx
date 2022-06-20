import React from 'react';
import Link from "next/link";
import style from "../../styles/Navbar.module.css"
import TopNav from "./TopNav";


const Navbar = (props) => {
    console.log("**********", props)
    return (
        <nav className={style.nav}>
            <TopNav/>
            <div className={style.navwrap}>
                <li>
                    <Link href="#">
                        <a>bags</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Travel</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Accesories</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Gifting</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Jewelery</a>
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;