import { Link, useLocation } from "react-router";
import style from "../styles/HomePage.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/homeProductsSlice";

export const HomePage = () => {
    const location = useLocation();
    const successMessage = location.state?.successMessage;
    const [showMessage, setShowMessage] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.homeProducts.products);
    const status = useSelector((state) => state.homeProducts.status);

    useEffect(() => {
        if (successMessage) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }
    }, [successMessage]);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (status === "succeeded") {
            console.log("Список товаров:", products);
        }
    }, [status, products]);

    return (
        <>
            <div className={style.container}>
                {showMessage && (
                    <div className={style.successMessage}>{successMessage}</div>
                )}
                 
                <div className={style.topContent}>  
                    <div className={style.listDiv}>
                    <ul className={style.list}>
                        <li><Link to='/products'>{t("navs.homeWomenFash")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeMenFash")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeTech")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeHome&life")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeMed")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeSport&outdoor")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeBabys&toys")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeGroc&pets")}</Link></li>
                        <li><Link to='/products'>{t("navs.homeHealth&beuty")}</Link></li>
                    </ul>
                </div>
                    <div className={style.iPhoneSale}>
                        <ul className={style.iPhoneText}>
                            <p className={style.iPhone}><img src="https://img.icons8.com/m_sharp/512/FFFFFF/mac-os.png" alt="" /> <span>{t("text.homeIPhoneSeries")}</span></p>
                            <p className={style.text}>{t("text.homeIPhoneSale")}</p>
                            <Link to='/products'><button className={style.shopNow}>{t("navs.homeShopNow")}</button></Link>
                        </ul>
                        <ul>
                            <li className={style.phone}><Link to='/products'><img src="https://s0.rbk.ru/v6_top_pics/media/img/5/01/756625747276015.webp" alt="" /></ Link>
                            </li>
                        </ul>
                    </div>
                </div>
               
                <div className={style.productsContainer}>
                    <div className={style.productsList}>
                        {status === "loading" && <p>Loading...</p>}
                        {status === "failed" && <p>Error loading products</p>}
                        {status === "succeeded" && products.slice(0, 10).map((product) => (
                            <div key={product.id} className={style.productCard}>
                                <img src={product.image} alt={product.title} className={style.productImage} />
                                <p className={style.productName}>{t(`homeProducts.${product.title}`, { defaultValue: product.title })}</p>
                                <p className={style.productPrice}>{product.price} $</p>  
                            </div> 
                        ))}
                    </div>
                    <li className={style.viewLi}>
                         <Link to="/products"><button className={style.view}>{t("buttons.viewAllProducts")}</button></Link>
                    </li>
                       
                </div> 
            </div>
        </>
    );
};