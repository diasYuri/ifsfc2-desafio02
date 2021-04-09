import React from 'react'
import css from './style.module.css'

export default function ListRoutes({data}: any) {
  
  const {title, startPosition, endPosition} = data
  
  return (
    <div className={css.box}>
      <h2>{title}</h2>
      <div className={css.flexRow}>
        <div className={css.flexColumn}>
          <h3>Start Position</h3>
          <p className={css.info}><span>Latitude: </span>{ startPosition.latitude}</p>
          <p className={css.info}><span>Longitude: </span>{ startPosition.longitude }</p>
        </div>  
        <div className={css.flexColumn}>
          <h3>End Position</h3>
          <p className={css.info}><span >Latitude: </span>{ endPosition.latitude}</p>
          <p className={css.info}><span>Longitude: </span>{ endPosition.longitude}</p>
        </div>
      </div>
    </div>
  )
}


