import PropTypes from "prop-types";

const MyButton = ({ text, className, link }) => {
  return (
    <a
      target="_blank"
      href={link}
      className={`block cursor-pointer rounded-lg border py-2 text-center transition-all ${className}`}
    >
      {text}
    </a>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
};

export default MyButton;
