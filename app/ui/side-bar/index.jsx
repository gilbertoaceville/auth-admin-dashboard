import Image from 'next/image';
import { MdLogout } from 'react-icons/md';

import RenderLink from './component/render-link';
import styles from './styles.module.scss';
import { sideBarItems } from './const';
import { auth, signOut } from '@/auth';

export default async function SideBar() {
  const session = await auth();

  async function handleLogOut() {
    'use server';
    await signOut();
  }
  return (
    <nav className={styles.wrapper}>
      <div className={styles.account}>
        <Image
          className={styles.avatar}
          src={session?.user?.image || "/profile.png"}
          alt="user"
          width={50}
          height={50}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.user}>
          <span className={styles.user__name}>{session?.user?.username}</span>
          <span className={styles.user__position}>Administrator</span>
        </div>
      </div>
      <ul>
        {(sideBarItems || []).map(item => (
          <RenderLink key={item.title} {...item} />
        ))}
      </ul>
      <form action={handleLogOut}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </nav>
  );
}
