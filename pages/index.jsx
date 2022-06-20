import axios from "axios";
import CardProductList from "../Component/Cards/CardProductList";
import Navbar from "../Component/Navbar/Navbar";
import styles from '../styles/Home.module.css';
import {Container} from "react-bootstrap";
import NavIcon from "../Component/Navbar/NavIcon";
import Breadcrum from "../Component/Breadcrum/Breadcrum";
import {useEffect} from "react";

const Index = ({data, error}) => {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            console.log('.................gotcha');
        });
    },[]);

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    return (

            <div className={styles.BodyWrap}>
                <Container className={styles.containerWrap}>
                    <Navbar/>
                    <NavIcon/>
                    <Breadcrum metadata={data.metadata}/>
                    <CardProductList products={data}/>
                </Container>
            </div>
    );
};

export async function getServerSideProps(context) {
    console.log("sdfdf");
    try {
        const res = await axios.get(`https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`);
        const data = res.data
        return {
            props: {
                data: data
            }
        }
    } catch (error) {
        return {
            props: {
                error
            }
        }
    }
};

export default Index;