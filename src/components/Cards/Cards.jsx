import PropTypes from "prop-types";
import Card from "./../Card/Card";

const Cards = ({ cards }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 w-11/12 mx-auto">
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

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
