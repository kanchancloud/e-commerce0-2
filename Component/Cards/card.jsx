import {Card, Button} from "react-bootstrap";
import style from '../../styles/Cards.module.css'
import AddCartSvg from '/public/add_cart.svg';
import ImageTag from "../../public/TopNavIconS/ImageTag.svg"

function cards(props) {
    console.log(">>>>>>>>>>>", props)
    return (

        <Card className={style.CardsWrapper}>
            <div className={style.imgWrapper}>
                <div className={style.IamgeAddIcon}> <ImageTag /></div>
                <Card.Img variant="top" src={props.data.plpimaage} className={style.cardImg}/>
            </div>
            <Card.Body className={style.cardBody}>
                <div className={style.CardText}>
                    <Card.Text>
                        {props.data.name}
                    </Card.Text>
                    <div className={style.addIcon}>
                        <div className={style.detailWrap}>
                            <span className={style.productAmount}> ₹ {props.data.price} </span>
                            <span className={style.productId}>{props.data.id}</span>
                            <span className={style.productDiscount}>   ({props.data.discount_usd}%Off) </span>
                        </div>
                        <AddCartSvg />
                    </div>
                </div>
            </Card.Body>
        </Card>

    );
};


export default cards;