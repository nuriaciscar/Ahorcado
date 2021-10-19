import PropTypes from "prop-types";

const Word = ({ word }) => {
  return <div className="word__letter">{word}</div>;
};

Word.propTypes = {
  word: PropTypes.array.isRequired,
};

export default Word;
