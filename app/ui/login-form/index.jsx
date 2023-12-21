'use client';

import { loginUser } from '@/lib/mongoose/controllers/user';
import styles from './styles.module.scss';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, undefined);

  return (
    <div className={styles.wrapper}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
}
