import Link from 'next/link';
import Search from '@/ui/search';
import Image from 'next/image';

import styles from './styles.module.scss';
import clsx from 'clsx';
import Pagination from '@/ui/pagination/pagination';
import { userTitle } from '@/lib/content.data';

export default function ContentTemplate({
  placeholder = 'search for a user',
  addLink = '/dashboard/users/add',
  viewLink = '/dashboard/users/1',
  titleArray = userTitle,
  src = "/profile.png"
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Search placeholder={placeholder} />
        <Link href={addLink}>
          <button className={styles.cta}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {titleArray?.map(title => (
              <td key={title}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>joe@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin </td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={viewLink}>
                  <button className={clsx(styles.button, styles.view)}>View</button>
                </Link>
                <input type="hidden" name="id" value={''} />
                <button className={clsx(styles.button, styles.delete)}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
