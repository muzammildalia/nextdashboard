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
    // console.log(e, "e.default");
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    // console.log(res, "res");

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    // <form onSubmit={handleLogin} className={styles.form}>
    //   <h3>Welcome Back, 👋</h3>
    //   <p>Sign in to your dashboard & start tracking your analytics.</p>
    //   <input
    //     type="text"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     placeholder="username"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="password"
    //   />
    //   <button>Login</button>
    //   {error && <div className={styles.error}>{error}</div>}
    // </form>
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src="/customer_logo.svg"
          alt="Logo"
          style={{
            height: "100%",
            width: "30%",
            objectFit: "contain",
          }}
        />
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
          />
        </div>

        <div className={styles.inputGroup} style={{ width: "100%" }}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            className={styles.input}
            minLength={8}
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.forgotPassword}>
          <Link href="/forgot-password" className={styles.forgotPasswordLink}>
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
