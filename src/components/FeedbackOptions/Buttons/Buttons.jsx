import PropTypes from 'prop-types';
import s from './Buttons.module.css';

function Buttons({ option, onLeaveFeedback }) {
  return (
    <li className={s.buttonsListItem}>
      <button
        type="button"
        className={s.button}
        name={option}
        onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

Buttons.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default Buttons;