import React from "react";

function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <React.Fragment key={index}>
      <h3>{event.title}</h3>
      <button onClick={() => handleClick(event.id)}>Delete</button>
    </React.Fragment>
  ));
}

export default EventList;
