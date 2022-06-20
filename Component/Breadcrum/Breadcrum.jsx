import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import UpArrow from "../../public/TopNavIconS/UpArrow.svg";
import style from "../../styles/Breadcrumb.module.css";

const Breadcrum = ({metadata}) => {
    return (
        <div className={style.breadcrumbWrap}>
            <div>
                <Breadcrumb className={style.breadcrumb}>
                    {
                        metadata.breadcrumbs.map(e => {
                            return <Breadcrumb.Item key={e.copy} href={e.slug} active={!e.hyperlink}>{e.copy}</Breadcrumb.Item>
                        })
                    }
                </Breadcrumb>
            </div>
            <div className={style.breadcrumbIcon}>
                <span className={style.productCount}> 13 </span>
                <span className={style.product}> product </span>
                <span className={style.productIcon}> <UpArrow className={style.icon}/> </span>
            </div>
        </div>
    );
};

export default Breadcrum;