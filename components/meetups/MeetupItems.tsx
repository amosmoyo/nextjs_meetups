import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItems.module.css";
import {useRouter} from 'next/router'

const MeetupItems = (props: any) => {
  const router = useRouter();
  const onShowDetailsHandler = () => {
    // console.log(props)
    router.push('/' + props.id)
  }
  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={onShowDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItems;
