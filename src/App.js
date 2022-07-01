import "./App.css";
import { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "React event", id: 1 },
    { title: "Angular event", id: 2 },
    { title: "Vue event", id: 3 },
    { title: "Node event", id: 4 },
    { title: "Next event", id: 5 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  return (
    <div className="App">
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
      {showEvents &&
        events.map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <button onClick={() => handleClick(event.id)}>
              <img src="./remove-icon.png" alt="Delete man" />
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
