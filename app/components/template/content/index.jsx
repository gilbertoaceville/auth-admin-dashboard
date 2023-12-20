import Link from 'next/link';
import Search from '@/ui/search';
import Image from 'next/image';

import styles from './styles.module.scss';
import clsx from 'clsx';
import Pagination from '@/ui/pagination/pagination';

export default function ContentTemplate({
  data = [],
  placeholder,
  addLink,
  count,
  titleArray,
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
          {data.map(item => {
            const statusText = item?.isAdmin ? 'Admin' : 'Client';
            const activeText = item?.isActive ? 'active' : 'passive';
            const content = item?.username ? "users" : "products"

            return (
              <tr key={item?._id}>
                <td>
                  <div className={styles.user}>
                    <Image src={item?.image || "/profile.png"} alt={content} width={40} height={40} className={styles.image} />
                    {item?.username || item?.title}
                  </div>
                </td>
                <td>{item?.email || item.desc}</td>
                <td>{item?.createdAt?.toString()?.slice(4, 16)}</td>
                {item?.admin && <td>{statusText}</td>}
                {item?.activeText && <td>{activeText}</td>}
                {item?.price && <td>{item?.price}</td>} 
                {item?.price && <td>{item?.stock}</td>}
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/${content}/${item?._id}`}>
                      <button className={clsx(styles.button, styles.view)}>View</button>
                    </Link>
                    <input type="hidden" name="id" value={''} />
                    <button className={clsx(styles.button, styles.delete)}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination pageCount={count} />
    </div>
  );
}
