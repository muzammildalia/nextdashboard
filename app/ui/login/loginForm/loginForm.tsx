"use client";

import { signIn } from "next-auth/react";
import styles from "./loginForm.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/customer_logo.svg" alt="Logo" className={styles.logo} />
      </div>
      <form
        onSubmit={handleLogin}
        className={styles.form}
        style={{ alignItems: "flex-start" }}
      >
        <h3 className={styles.title}>Welcome Back, 👋</h3>
        <p className={styles.subtitle}>
          Sign in to your dashboard & start tracking your analytics.
        </p>

        <div className={styles.inputGroup} style={{ width: "100%" }}>
          <label className={styles.label}>Username</label>
          <input
            type="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Example@email.com"
            className={styles.input}
            style={{ display: "flex", width: "100%", height: 10 }}
          />
        </div>

        <div className={styles.inputGroup1} style={{ width: "100%" }}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className={styles.input}
            minLength={8}
            style={{ display: "flex", width: "100%", height: 10 }}
          />
        </div>
        <div className={styles.forgotPassword}>
          <Link href="/forgot-password" className={styles.forgotPasswordLink}>
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className={styles.csutom_buton}
          style={{
            width: "100%",
          }}
        >
          Sign In
        </button>

        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
