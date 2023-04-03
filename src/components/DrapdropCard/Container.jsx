import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Card from "./Card";
const style = {
  width: 400,
};
const ITEMS = [
  {
    id: "a",
    text: "Write a cool JS library",
  },
  {
    id: "b",
    text: "Make it generic enough",
  },
  {
    id: "c",
    text: "Write README",
  },
  {
    id: "d",
    text: "Create some examples",
  },
  {
    id: "e",
    text: "Spam in Twitter and IRC to promote it",
  },
  {
    id: "f",
    text: "???",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];
const Container = () => {
  const [cards, setCards] = useState(ITEMS);
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` == id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));
  return (
    <div ref={drop} style={style}>
      {cards.length > 0 &&
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
    </div>
  );
};

export default memo(Container);
