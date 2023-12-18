import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lama Dev</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
}
