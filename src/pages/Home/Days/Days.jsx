import React from 'react';
import style from './Days.module.scss'
import Card from './Card';
import Tabs from './Tabs';

const Days = () => {
  const days = [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '31 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    }
  ]
  return (
    <>
      <Tabs/>
      <div className={style.days}>
        {days.map((day) => 
          <Card 
            days={day}
          /> 
        )}
      </div>
    </>
  );
}

export default Days;