import React from 'react'
import style from './header.module.css'

export default function Search() {
  return (
    <div className={style.searchHistory}>
        <div className={style.square}></div>
            <h4>Недавнее</h4>
            <p>Нет недавних запросов.</p>
    </div>
  )
}
