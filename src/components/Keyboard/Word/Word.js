import PropTypes from "prop-types";

const Word = ({ wordList }) => {
  wordList.map((letter) => (
    <div className={`word__letter${letter.isGuessed ? " guessed" : " hidden"}`}>
      {" "}
      {letter}
    </div>
  ));
};
Word.propTypes = {
  word: PropTypes.array.isRequired,
};

export default Word;
