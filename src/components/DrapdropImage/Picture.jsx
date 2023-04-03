import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ url, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      src={url}
      alt=""
      ref={drag}
      width={"150px"}
      style={{
        opacity: isDragging ? "0%" : "100%",
      }}
    />
  );
};

export default Picture;
