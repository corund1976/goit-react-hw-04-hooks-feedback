import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Buttons from './Buttons';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonsList}>
      {options.map(option => (
        <Buttons
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback} />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;