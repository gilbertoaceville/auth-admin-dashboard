'use client';

import { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import styles from './styles.module.scss';
import { themeOptions } from './const';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [activeThemeLabel, setActiveThemeLabel] = useState('');

  useEffect(() => {
    // Perform theme-related logic after initial render
    const label = themeOptions.reduce((label, option) => {
      return option.value === theme ? option.label : label;
    }, '');
    setActiveThemeLabel(label);
  }, [theme]);

  return (
    <div title={theme} className={styles.wrapper}>
      <Select
        options={themeOptions}
        values={[
          {
            value: theme,
            label: activeThemeLabel,
          },
        ]}
        onChange={values => setTheme(values[0].value)}
        className={styles.customSelect}
      />
    </div>
  );
}
