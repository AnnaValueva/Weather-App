import React from 'react';
import style from './ThisDayInfo.module.scss';
import IndicatorSvgSelector from '../../../../assets/icons/Indicators/IndicatorSvgSelector';

const ThisDayInfoItem = ({ item }) => {
  const {iconId, name, value} = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={iconId}/>
      </div>
      <div className={style.indicator__name}>{name}</div>
      <div className={style.indicator__value}>{value}</div>
    </div>
  );
}

export default ThisDayInfoItem;