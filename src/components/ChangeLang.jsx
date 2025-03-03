import { useTranslation } from "react-i18next";
import styles from "../styles/ChangeLang.module.css";
import { useState } from "react";

export const ChangeLang = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const getLanguageLabel = (lang) => {
        switch (lang) {
            case "en":
                return "English";
            case "ru":
                return "Русский";
            default:
                return "Language";
        }
    };

    return (
        <div className={styles.container}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={styles.button}
            >
                {getLanguageLabel(i18n.language)}
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <ul>
                        <li>
                            <button 
                                onClick={() => handleChangeLanguage("en")}
                                className={styles.langButton}
                            >
                                English(Английский)
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleChangeLanguage("ru")}
                                className={styles.langButton}
                            >
                                Русский(Russian)
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
