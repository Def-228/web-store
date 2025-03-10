import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import styles from "../styles/Header.module.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      
      if (location.pathname === "/account") {
        navigate("/");
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h2>{t("text.headerTitle")}</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("navs.headerHome")}</Link>
          </li>
          <li className={styles.products}>
            <Link to="/products">{t("navs.headerProducts")}</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/account">{t("navs.headerAccount")}</Link>
              </li>
              <li className={styles.signOut}>
                <button onClick={handleLogout}>{t("buttons.logOutBtn")}</button>
              </li>
            </>
          ) : (
            <>
              <li className={styles.signIn}>
                <Link to="/sign-in">{t("navs.headerLogIn")}</Link>
              </li>
              <li className={styles.signUp}>
                <Link to="/sign-up">{t("navs.headerSignUp")}</Link>
              </li>
            </>
          )}
          <li className={styles.search}>
            <input type="text" placeholder={t("inputs.headerInp")} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
