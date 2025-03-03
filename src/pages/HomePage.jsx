import { Link } from "react-router";
import style from "../styles/HomePage.module.css";

export const HomePage = () => {
    return (
        <>
        <div className={style.container}>
             <div className={style.listDiv}>
            <ul className={style.list}>
                <li><Link to='/products'>Women's Fashion</Link></li>
                <li><Link to='/products'>Men's Fashion</Link></li>
                <li><Link to='/products'>Technology</Link></li>
                <li><Link to='/products'>Home & Lifestyle</Link></li>
                <li><Link to='/products'>Medicine</Link></li>
                <li><Link to='/products'>Sports & Outdoor</Link></li>
                <li><Link to='/products'>Baby's & Toys</Link></li>
                <li><Link to='/products'>Groceries & Pets</Link></li>
                <li><Link to='/products'>Health & Beauty</Link></li>
            </ul>
        </div>
        <div className={style.iPhoneSale}>
            <ul className={style.iPhoneText}>
            <p className={style.iPhone}><img src="https://img.icons8.com/m_sharp/512/FFFFFF/mac-os.png" alt="" /> <span>iPhone 14 Series</span></p>
            <p className={style.text}>Up to 10% off Voucher</p>
            <li className={style.shop}><Link to='/products'>Shop Now </Link></li>
            </ul>

            <ul>
                <li className={style.phone}><Link to='/products'><img src="https://s0.rbk.ru/v6_top_pics/media/img/5/01/756625747276015.webp" alt="" /></ Link>
                </li>
            </ul>
        </div>
        </div>
        </>        
    );
};
