import Image from 'next/image';
import styles from './styles.module.scss';

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/profile.png"
                  alt="user"
                  height={40}
                  width={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>
              <span data-status={'pending'} className={styles.status}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
