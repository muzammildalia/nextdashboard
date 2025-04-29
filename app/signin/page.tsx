"use client";
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const SigninPage = () => {
  return (
    <div className={styles.maincontainer}>
      <LoginForm />
    </div>
  );
};

export default SigninPage;
