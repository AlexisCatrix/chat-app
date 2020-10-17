import React from "react";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Contact
        name="Aaron Davis"
        avatar="https://randomuser.me/api/portraits/men/88.jpg"
        online
        statustext="online"
      />
      <Contact
        name="Diane Butler"
        avatar="https://randomuser.me/api/portraits/women/56.jpg"
        online={false}
        statustext="offline"
      />
      <Contact
        name="Tim Brewer"
        avatar="https://randomuser.me/api/portraits/men/39.jpg"
        online
        statustext="online"
      />
    </div>
  );
}

