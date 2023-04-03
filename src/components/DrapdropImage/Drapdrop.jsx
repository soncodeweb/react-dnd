import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "./Drapdrop.css";
const drapList = [
  { id: 1, url: "https://picsum.photos/500" },
  { id: 2, url: "https://picsum.photos/501" },
  { id: 3, url: "https://picsum.photos/502" },
];

const picture = drapList.map((picture) => (
  <Picture url={picture.url} id={picture.id}></Picture>
));

const Drapdrop = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImage(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImage = (id) => {
    const droppedPictures = drapList.filter((picture) => picture.id === id);
    setBoard((board) => [...board, droppedPictures[0]]);
  };

  const boardImages = board.map((picture) => (
    <Picture url={picture?.url} id={picture?.id}></Picture>
  ));
  return (
    <div className="container">
      <div className="drap-box">{picture}</div>
      <div
        className="drap-board"
        ref={drop}
        style={{ border: isOver ? "3px solid red" : "1px solid black" }}
      >
        {boardImages}
      </div>
    </div>
  );
};

export default Drapdrop;
