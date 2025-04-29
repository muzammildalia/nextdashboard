"use client";
import styles from "@/app/ui/signup/sigup.module.css";

import SignupForm from "../ui/signup/signupForm/signupForm";

const SignupPage = () => {
  return (
    <div className={styles.maincontainer}>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
