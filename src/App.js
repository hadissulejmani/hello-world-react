import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "React event", id: 1 },
    { title: "Angular event", id: 2 },
    { title: "Vue event", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const titleContent = "Testing props";

  return (
    <div className="App">
      <Title title={titleContent} subTitle="Subtitle" />
      <Title title="Testing again!!!" />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal>
          <h1>Terms and conditions</h1>
          <p>
            lorem ipsum dol amet lorem ipsum dolor amet lorem ipsum dolor amet
          </p>
          <button onClick={handleClose}>Close</button>
        </Modal>
      )}
      <button onClick={handleShow}>Show Modal</button>
    </div>
  );
}

export default App;
