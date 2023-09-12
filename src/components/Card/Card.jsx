import PropTypes from "prop-types";
import { timeConversion } from "../../util/timeConversion";

const Card = ({ card }) => {
  const {
    thumbnail,
    authors: [{ profile_picture, profile_name, verified }],
    others: { views, posted_date },
    title,
  } = card;

  return (
    <>
      <div className="card  p-5 bg-base-200 shadow-lg py-10">
        <div className="relative">
          <img
            src={thumbnail}
            alt=""
            className="w-80 h-52 mx-auto rounded-lg"
          />
          {posted_date ? (
            <p className="bg-black text-white text-xs absolute p-1 right-0 bottom-0 rounded-sm">
              {timeConversion(posted_date)}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="flex gap-2 items-center mt-5">
          <img
            src={profile_picture}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h2 className="text-neutral-900 font-bold">{title}</h2>

            <div className="flex gap-2 items-center">
              <p className="text-gray-500 text-sm mt-2">{profile_name}</p>
              <img
                src={verified ? "./blueTick.png" : ""}
                alt=""
              />
            </div>

            <p className="text-gray-500 text-xs mt-2">{views}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
