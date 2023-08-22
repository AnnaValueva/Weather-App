import React from 'react';
import style from './Days.module.scss'
import GlobalSvgSelector from '../../../assets/icons/global/GlobalSvgSelector'

const Card = ({days}) => {
  const {day, day_info, icon_id, temp_day, temp_night, info} = days;
  return (
    <div className={style.card}>
      <div className={style.day}>{day}</div>
      <div className={style.day__info}>{day_info}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={icon_id}/>
      </div>
      <div className={style.temp__day}>{temp_day}</div>
      <div className={style.temp__night}>{temp_night}</div>
      <div className={style.info}>{info}</div>
    </div>
  );
}

export default Card;