import PropTypes from 'prop-types';
import iconOro from '../../assets/icon-oro.png'

export const Profile = ({name, points, image}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='relative my-1 mx-1'>
          <img 
            src={image} 
            alt="profile image"
            className='w-20 h-20 rounded-full border border-white object-cover'
          />
          
          <img 
            src={iconOro} 
            alt="oro category icon" 
            className='absolute -bottom-1 right-0 w-8 h-8'
          />
        </div>
          
        <h2 className='font-bold text-2xl text-text-title'>{name}</h2>
        <p className='font-bold text-xs text-text-caption'>{points} pts</p>
    </div>
  )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
  