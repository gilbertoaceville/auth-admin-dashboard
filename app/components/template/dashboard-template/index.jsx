import Transactions from '@/ui/transactions';
import styles from './styles.module.scss';
import Chart from '@/ui/chart';
import Card from '@/ui/card';
import RightSideBar from '@/ui/right-side-bar';

export default function DashboardTemplate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <aside className={styles.side}>
        <RightSideBar />
      </aside>
    </div>
  );
}
