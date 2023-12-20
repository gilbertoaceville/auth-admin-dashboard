'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss';
import { ITEMS_PER_PAGE } from '@/base/constant/const';

export default function Pagination({ pageCount }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);
  const page = params.get('page') || 1;
  const calcPage = Number(page) - 1;

  const isPrevPage = ITEMS_PER_PAGE * calcPage > 0;
  const isNextPage = ITEMS_PER_PAGE * calcPage + ITEMS_PER_PAGE < pageCount;

  function handlePageSwitch(type) {
    type === 'prev' ? params.set('page', Number(page) - 1) : params.set('page', Number(page) + 1);
    router.replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled={!isPrevPage}
        onClick={()=>handlePageSwitch("prev")}
        // onClick={() => handisNextPage = ITEMS_PER_PAGE * (currentPage + ITEMS_PER_PAGE)leChangePage("prev")} <
      >
        Previous
      </button>
      <button className={styles.button} disabled={!isNextPage} onClick={()=>handlePageSwitch("next")}>
        Next
      </button>
    </div>
  );
}
