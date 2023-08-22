import React from 'react';
import styles from './Header.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

const Header = () => {
  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Новгород' }
  ]

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo"/> 
        </div>
        <div className={styles.title}>
          React weather
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <Select 
          defaultValue={options[0]}
          options={options} 
          styles={colourStyles}
        />
      </div>
    </header>
  );
}

export default Header;