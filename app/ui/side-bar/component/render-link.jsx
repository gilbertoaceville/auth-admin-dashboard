'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "../styles.module.scss";

export default function RenderLink({ title, list = [] }) {
  const pathname = usePathname();
  return (
    <li>
      <span className={styles.category}>{title}</span>
      {list.map(item => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            data-is-active={String(isActive)}
            href={item.href}
            className={styles.link}>
            {item.icon}
            {item.name}
          </Link>
        );
      })}
    </li>
  );
}
