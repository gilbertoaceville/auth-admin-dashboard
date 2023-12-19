import Image from 'next/image';
import styles from '../styles.module.scss';

export default function SingleUserPageTemplate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src="/profile.png" alt="profile" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <input type="hidden" name="id" placeholder="" />
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="johndoe@gmail.com" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" name="phone" placeholder="+81-90237482" />
          <label htmlFor="address">Address</label>
          <textarea id="address" type="text" name="address" placeholder="Boston, Massachusetts" />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
