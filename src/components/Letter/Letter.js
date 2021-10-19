import PropTypes from "prop-types";

const Letter = ({ letter }) => {
  return (
    <div className={`word__letter${letter.isGuessed ? " guessed" : " hidden"}`}>
      {letter.letter}
    </div>
  );
};

Letter.propTypes = {
  letter: PropTypes.shape({
    position: PropTypes.number.isRequired,
    letter: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    isGuessed: PropTypes.bool.isRequired,
  }),
};

export default Letter;
