import Image from 'next/image';
import styles from '../styles.module.scss';
import { updateUser } from '@/lib/mongoose/controllers/user';

export default function SingleUserPageTemplate({ user }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src={user.image || "/profile.png"} alt="profile" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formWrapper}>
        <form action={updateUser} className={styles.form}>
        <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
