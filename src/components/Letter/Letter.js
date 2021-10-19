import PropTypes from "prop-types";

const Letter = ({ letter }) => {
  return (
    <div className={`word__letter${letter.isGuessed ? " guessed" : " hidden"}`}>
      {letter.letter}
    </div>
  );
};
// Word.propTypes = {
//   word: PropTypes.array.isRequired,
// };

export default Letter;
