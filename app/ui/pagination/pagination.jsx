import styles from './styles.module.scss';

export default function Pagination() {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled
        // disabled={!hasPrev}
        // onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        // disabled={!hasNext}
        // onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}
