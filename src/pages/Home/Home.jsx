import React from 'react';
import style from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>
    </div>
  );
}

export default Home;