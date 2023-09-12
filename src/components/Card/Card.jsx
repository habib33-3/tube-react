import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { thumbnail } = card;

  return (
    <>
      <div>
        <img
          src={thumbnail}
          alt=""
        />
      </div>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
