import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    const router = useRouter();
    router.push("/login"); 
    return null; 
  }

  const user = session?.user;
  console.log(user, "userqwerty");

  return (
    <div className={styles.sidebar}>
      <Image
        src="/customer_logo.svg"
        alt="WeeShare Logo"
        width={160}
        height={50}
        className={styles.logo}
      />
      <input
        className={styles.search}
        type="text"
        placeholder="Search for..."
      />

      <nav className={styles.nav}>
        <button className={`${styles.navItem} ${styles.active}`}>
          <span>🏠</span> Dashboard
        </button>
        <button className={styles.navItem}>
          <span>🔔</span> Notifications
        </button>
        <button className={styles.navItem}>
          <span>👤</span> Users
        </button>
        <button className={styles.navItem}>
          <span>🚩</span> Flagged Posts
        </button>
        <button className={styles.navItem}>
          <span>📢</span> Advertisements
        </button>
        <button className={styles.navItem}>
          <span>✍️</span> Blogs
        </button>
      </nav>

      <button className={styles.logout}>
        <span>↩️</span> Logout
      </button>
    </div>
  );
};

export default Sidebar;
