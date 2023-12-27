import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

import styles from './styles.module.scss';

export default function RightSideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
