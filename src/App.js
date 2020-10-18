import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Use your module names here.
   const modules = [
    {
        name: "Web Development",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Business Analytics",
        noLectures: 2,
        noPracticals: 2
    },
      {
        name: "English",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Agile Software Practice",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Enterprise System",
        noLectures: 2,
        noPracticals: 2
    }
   ];
  const name = "HDip Computer Systems" // Replace

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App