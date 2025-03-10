import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const triggerError = (message) => {
    setError(message);
    setShowError(true);
  };

  const signUp = async () => {
    if (!email.includes("@")) {
      triggerError(t("errors.invalidEmail"));
      return;
    }
    if (pass.length < 6) {
      triggerError(t("errors.weakPassword"));
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(t("messages.userRegistered"), userCredential.user);

      navigate("/", { state: { successMessage: t("messages.successfulRegistration") } });
    } catch (error) {
      console.error("Firebase error:", error.code);

      const errorMessages = {
        "auth/email-already-in-use": t("errors.emailInUse"),
        "auth/invalid-email": t("errors.invalidEmailFormat"),
        "auth/weak-password": t("errors.weakPassword"),
      };

      triggerError(errorMessages[error.code] || t("errors.registrationError", { message: error.message }));
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
        title={t("text.createAcc")}
        buttontitle={t("buttons.createAccBtn")}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        submit={signUp}
      />
    </div>
  );
};
