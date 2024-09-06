import PropTypes from 'prop-types';
import xImg from '../../assets/x.png'
import arrowRightImg from '../../assets/arrow-right.png'

export const StatePopUp = ({state, title, subtitle, execution, description}) => {
  return (
    <div className='flex flex-col items-start w-80 py-4 px-4 bg-blue-50 h-fit gap-2'>
        <div className="flex flex-row justify-center w-full relative">
            <p className={`font-bold text-sm ${
                state === 'Completado' ? 'text-system-successColor' :
                state === 'En proceso' ? 'text-system-wariningColor' :
                state === 'No ejecutado' ? 'text-system-errorColor' :
                state === 'No visitado' ? 'text-text-caption' : ''
                }`}>
            {state}
            </p>
            <button className='absolute right-0'>
                <img src={xImg} alt="" />
            </button>
        </div>

        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center w-full'>
                <h2 className='text-primary-darkBlue-300 font-bold text-2xl'>{title}</h2>
                <p className='text-neutral-700 text-xxxs'>{subtitle}</p>
            </div>

            <div>
                <h3 className='font-bold text-base text-text-title'>{`Excecution (${execution})`}</h3>
                <h4 className='text-text-caption text-xxs'>{description}</h4>
            </div>
        </div>

        {/* Es un ejemplo mientras utilizo el componente btn */}
        <button className='w-full bg-text-title flex items-center justify-center text-neutral-50'>
            Button Text <img src={arrowRightImg} alt="" />
        </button>
        
    </div>
  )
}

StatePopUp.propTypes = {
    state: PropTypes.oneOf(['Completado', 'En proceso', 'No ejecutado', 'No visitado']),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    execution: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
  