import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItems from "./MeetupItems";

const MeetupList = (props: any) => {
  // console.log(props.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => {
        return (
          <MeetupItems
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
