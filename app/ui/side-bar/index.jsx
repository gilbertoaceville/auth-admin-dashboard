"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";

import styles from "./styles.module.scss";
import { sideBarItems } from "./const";

export default function SideBar() {
  const pathname = usePathname();

  function renderItem({ title, list = [] }) {
    return (
      <li key={title}>
        <span className={styles.category}>{title}</span>
        {list.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              data-is-active={String(isActive)}
              href={item.href}
              className={styles.link}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </li>
    );
  }

  return (
    <nav className={styles.wrapper}>
      <div className={styles.account}>
        <Image
          className={styles.avatar}
          src="/profile.png"
          alt="user"
          width={50}
          height={50}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.user}>
          <span className={styles.user__name}>Samuel Eto</span>
          <span className={styles.user__position}>Administrator</span>
        </div>
      </div>
      <ul>{(sideBarItems || []).map(renderItem)}</ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </nav>
  );
}
