import React from 'react';
import classes from './Details.module.css'

const Details = (props: any) => {
  return (
    <>
    <section className={classes.details}>
        <img src={props.image} alt="meetup details" />
        <div className={classes.data}>
            <h1>{props.title}</h1>
            <p>Adress, {props.address} Nairobi, Kemya</p>
            <p>{props.description}</p>
        </div>
    </section>
    </>
  )
}

export default Details