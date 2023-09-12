import PropTypes from "prop-types";
import Card from "./../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/videos/category/1000"
      );
      const data = await res.json();
      setCards(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
        {cards.map((card) => {
          return (
            <>
              <Card card={card}></Card>
            </>
          );
        })}
      </div>
    </>
  );
};

Cards.propTypes = {};

export default Cards;
