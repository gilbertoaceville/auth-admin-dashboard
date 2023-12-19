import styles from './styles.module.scss';

export default function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
