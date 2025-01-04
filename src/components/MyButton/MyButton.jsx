import PropTypes from "prop-types";

const MyButton = ({ text, className }) => {
  return (
    <a
      className={`block w-full rounded-lg border py-2 text-center transition-all ${className}`}
    >
      {text}
    </a>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MyButton;
