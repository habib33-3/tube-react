import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Navigation = ({ fetchData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
      );
      const data = await res.json();
      setCategories(data.data);
      console.log(categories);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        <div className="flex justify-center items-center gap-6 my-10">
          {categories.map((category) => {
            return (
              <>
                <button
                  onClick={() => fetchData(category.category_id)}
                  className="btn btn-accent rounded-sm focus:bg-red-400 text-[#252525B2] font-medium text-base"
                >
                  {category.category}
                </button>
              </>
            );
          })}
        </div>
      }
    </>
  );
};

Navigation.propTypes = {
  fetchData: PropTypes.func,
};

export default Navigation;
