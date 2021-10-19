import "./KeyboardButton.css";
import PropTypes from "prop-types";

function KeyboardButton({ text, actionOnClick }) {
  return <button onClick={actionOnClick}>{text}</button>;
}

KeyboardButton.propTypes = {
  text: PropTypes.string,
  actionOnClick: PropTypes.func,
};

export default KeyboardButton;
