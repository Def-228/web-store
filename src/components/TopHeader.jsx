import { Link } from "react-router";
import styles from "../styles/TopHeader.module.css";
import { useTranslation } from "react-i18next";

export const TopHeader = () => {
    const { t } = useTranslation(); 

    return (
        <div className={styles.topHeader}>
            <p className={styles.text}>
                {t("text")} <Link className={styles.Shop} to="/products">{t("shop")}</Link>
            </p>
        </div>
    );
};

