"use client";
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const SigninPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default SigninPage;

// <form onSubmit={handleLogin}>
//   <input
//     value={username}
//     onChange={(e) => setUsername(e.target.value)}
//     placeholder="Username"
//   />
//   <input
//     type="password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     placeholder="Password"
//   />
//   <button type="submit">Login</button>
// </form>
