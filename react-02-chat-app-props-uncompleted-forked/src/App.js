import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Anne Walker"
        avatar="https://randomuser.me/api/portraits/women/21.jpg"
        online
      />
      <Contact
        name="Georgia Gonzalez"
        avatar="https://randomuser.me/api/portraits/women/18.jpg"
      />
      <Contact
        name="Alberto Brown"
        avatar="https://randomuser.me/api/portraits/men/9.jpg"
        online
      />
    </div>
  );
}

export default App;
