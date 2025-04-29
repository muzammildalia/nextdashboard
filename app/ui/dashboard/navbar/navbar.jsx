"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
  MdOutlineArrowDownward,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>Welcome Back, Nouman 👋</div>
        <div className={styles.subtitle}>
          This is the Admin Dashboard, Track the Analytics here.
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.borderbtn}>
          {/* <MdSearch /> */}
          <div className={styles.reportbutton}>Export Data</div>
          <MdOutlineArrowDownward />
        </div>
        <div className={styles.search}>
          {/* <MdSearch /> */}
          <div className={styles.reportbutton}>Create Report</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
