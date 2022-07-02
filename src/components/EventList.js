import React from "react";
import styles from "./EventList.module.css";

function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <div className={styles.card} key={index}>
      <h3>{event.title}</h3>
      <p>
        {event.location} - {event.date}
      </p>
      <button onClick={() => handleClick(event.id)}>Delete</button>
    </div>
  ));
}

export default EventList;
