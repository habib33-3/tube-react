import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="md:flex justify-between items-center w-90% mx-auto p-10">
      <img
        src="./Logo.png"
        alt=""
      />
      <button className="btn btn-accent text-[#252525] font-medium text-lg">
        Sort By View
      </button>
      <button className="btn btn-error text-white font-medium text-lg">
        Blog
      </button>
    </header>
  );
};

Header.propTypes = {};

export default Header;
