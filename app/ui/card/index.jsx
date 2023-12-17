import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './styles.module.scss';

export default function Card({ item }) {
  const isItemChange = item?.change > 0;
  return (
    <div className={styles.wrapper}>
      <MdSupervisedUserCircle size={24} />

      <div className={styles.content}>
        <p className={styles.title}>{item?.title || 'Total Users'}</p>
        <p className={styles.number}>{item?.number || '10.000'}</p>

        <div className={styles.detail}>
          <span data-with-change={String(!isItemChange)} className={styles.detail__change}>
            {item?.change || 12}%
          </span> more than previous week
        </div>
      </div>
    </div>
  );
}
