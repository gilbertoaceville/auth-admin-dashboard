import SideBar from "@/ui/side-bar";
import NavBar from "@/ui/nav-bar";
import styles from "./styles.module.scss";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sideBar}>
        <SideBar />
      </section>
      <section className={styles.content}>
        <NavBar />
        {children}
      </section>
    </div>
  );
}
