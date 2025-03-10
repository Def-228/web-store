import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { auth } from "../firebaseConfig";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const triggerError = (message) => {
    setError(message);
    setShowError(true);
  };

  const signIn = async () => {
    setLoading(true);

    if (!email.includes("@")) {
      triggerError(t("errors.invalidEmail"));
      setLoading(false);
      return;
    }
    if (pass.length < 6) {
      triggerError(t("errors.weakPassword"));
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      console.log(t("messages.userLoggedIn"), userCredential.user);
      
      navigate("/", { state: { successMessage: t("messages.successfulLogIn") } });
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error.code);

      const errorMessages = {
        "auth/user-not-found": t("errors.userNotFound"),
        "auth/wrong-password": t("errors.wrongPassword"),
        "auth/invalid-email": t("errors.invalidEmailFormat"),
        "auth/user-disabled": t("errors.userDisabled"),
        "auth/too-many-requests": t("errors.tooManyRequests"),
      };

      triggerError(errorMessages[error.code] || t("errors.loginError", { message: error.message }));
    }
  };

  return (
    <div>
      {showError && error && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "18px",
            fontWeight: "500",
            maxWidth: "300px",
            zIndex: 3000,
          }}
        >
          {error}
        </div>
      )}
      <Form
        title={t("text.logInToAcc")}
        buttontitle={loading ? t("text.loggingToAcc") : t("buttons.logInBtn")}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        submit={signIn}
      />
    </div>
  );
};
