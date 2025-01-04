import PropTypes from "prop-types";

const MyButton = ({ text, className }) => {
  return (
    <button
      className={`w-full rounded-lg border py-2 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MyButton;
