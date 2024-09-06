import xImg from '../../assets/x.png'
import PropTypes from 'prop-types';

export const CloseBtn = ({style}) => {
  return (
    <button className={style}>
        <img src={xImg} alt="" />
    </button>
  )
}

CloseBtn.propTypes = {
  style: PropTypes.string.isRequired
};
