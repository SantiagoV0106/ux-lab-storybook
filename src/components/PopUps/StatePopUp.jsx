import PropTypes from 'prop-types';
import { CloseBtn } from './CloseBtn';
import { Button } from '../Buttons/Button';

export const StatePopUp = ({state, title, subtitle, execution, description}) => {
  return (
    <div className='flex flex-col items-center w-80 py-4 px-4 bg-background-secondary h-fit gap-2'>
        <div className="flex flex-row justify-center w-full relative">
            <p className={`font-bold text-sm ${
                state === 'Completado' ? 'text-system-successColor' :
                state === 'En proceso' ? 'text-system-wariningColor' :
                state === 'No ejecutado' ? 'text-system-errorColor' :
                state === 'No visitado' ? 'text-text-caption' : ''
                }`}>
            {state}
            </p>
            <CloseBtn style='absolute right-0'/>
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
                    
        <Button 
            type="primary"
            appearance="filled"
            state="enabled"
            iconSrc="arrowRight"
            iconPosition="right"
        >Button Text</Button>

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
  