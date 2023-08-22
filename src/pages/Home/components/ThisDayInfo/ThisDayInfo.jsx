import React from 'react';
import style from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import ThisDayInfoItem from './ThisDayInfoItem';

const ThisDayInfo = () => {
  const items = [
    { iconId: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°'
    },
    { iconId: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное'
    },
    { iconId: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков'
    },
    { iconId: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер'
    },
  ]
  return (
    <div className={style.this__day_info}>
      <div className={style.this__day_info_items}>
        {items.map((item) => (
          <ThisDayInfoItem 
            key={item.iconId}
            item={item}
          />
        ))}
      </div>
      <img className={style.cloud__img} src={cloud} alt="облако" />
    </div>
  );
}

export default ThisDayInfo;