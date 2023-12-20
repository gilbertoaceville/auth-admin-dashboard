'use client';

import { MdSearch } from 'react-icons/md';
import styles from './styles.module.scss';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(e => {
    const params = new URLSearchParams(searchParams);
    if (!e.target.value) {
      params.delete('q');
    } else {
      params.set('q', e.target.value);
      params.set('page', 1);
    }

    router.replace(`${pathname}/?${params}`);
  }, 350);

  return (
    <div className={styles.wrapper}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}
