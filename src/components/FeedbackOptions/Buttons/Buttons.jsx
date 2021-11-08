import PropTypes from 'prop-types';
import s from './Buttons.module.css';

function Buttons({ options, onLeaveFeedback }) {
  return (
    options.map(item => 
      <li className={s.buttonsListItem} key={item}>
        <button
          type="button"
          className={s.button}
          name={item}
          onClick={onLeaveFeedback}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
          {/* p:first-letter{
            text-transform:capitalize;
            } */}
        </button>
      </li>
    )
  );
};

Buttons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default Buttons;