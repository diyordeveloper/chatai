import { useState } from "react";
import "./dragdrop.css";

interface Item {
  id: number;
  name: string;
}

interface Card {
  id: number;
  name: string;
  items: Item[];
}

function App(): JSX.Element {
  const [cardList, setCardList] = useState<Card[]>([
    {
      id: 34231213,
      name: "Group1",
      items: [
        { id: 343431, name: "item1" },
        { id: 23434, name: "item2" },
        { id: 43333, name: "item3" },
      ],
    },
    {
      id: 65432,
      name: "Group2",
      items: [
        { id: 3431231231, name: "group2item1" },
        { id: 12, name: "group2item2" },
        { id: 3333, name: "group2item3" },
      ],
    }, 
    {
      id: 1111111111111,
      name: "Group3",
      items: [ ],
    },
  ]);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, item: Item) {
    setCurrentItem(item);
    console.log(currentItem);
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    e.currentTarget.style.background = "#00040f";
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.currentTarget.style.background = "lightgray";
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, item: Card) {
    e.preventDefault();
    if (currentItem) {
      cardList.map((itm) => {
        itm.items = itm.items.filter(
          (person: Item) => person.id !== currentItem.id
        );
      });
      item.items.push(currentItem);
      console.log(item);
      setCardList([...cardList]);
    }
  }

  return (
    <div className="App ">
      <div className="group1">
        {cardList.map((card) => {
          return (
            <div
              key={card.id}
              className="group2"
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, card)}
            >
              {card.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    draggable
                    className="cardd"
                    onDragStart={(e) => dragStartHandler(e, item)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                  >
                    {item.id}
                    <br />
                    {item.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
