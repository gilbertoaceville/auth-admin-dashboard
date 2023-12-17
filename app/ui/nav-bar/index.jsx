"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import styles from "./styles.module.scss";

export default function NavBar() {
  const pathname = usePathname();
  const title = pathname.split("/").pop();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  );
}
