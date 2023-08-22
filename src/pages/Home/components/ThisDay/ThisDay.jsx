import React from 'react';
import style from './ThisDay.module.scss'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'


const ThisDay = () => {
  return (
    <div className={style.this__day}>
      <div className={style.top__block}>
        <div className={style.top__block_wrapper}>
          <div className={style.this__temp}>20°</div>
          <div className={style.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>

      <div className={style.bottom__block}>
        <div className={style.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={style.this__city}>
          Город: <span>Москва</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;