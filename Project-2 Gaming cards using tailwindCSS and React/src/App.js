import React from "react";
import NavBar from "./components/navbar";
import data from "./components/data";

export default function App() {
  const cardPrams = data.map((item) => {
    return <NavBar key={item.id} item={item} />;
  });

  return <div>{cardPrams}</div>;
}
