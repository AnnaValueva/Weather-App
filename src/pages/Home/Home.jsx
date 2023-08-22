import React from 'react';
import style from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import Days from './Days/Days';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>
      <Days/>
    </div>
  );
}

export default Home;