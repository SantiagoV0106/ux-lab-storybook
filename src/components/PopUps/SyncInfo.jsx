import PropTypes from 'prop-types';
import SyncInfoImg from '../../assets/sycn-info-image.png'
import ErrorBar from '../../assets/status-bar-error.png'
import ProcessBar from '../../assets/status-bar-proceso.png'
import CompletedBar from '../../assets/status-bar-completado.png'
import { CloseBtn } from './CloseBtn';

export const SyncInfo = ({state}) => {
  return (
    <div className='flex flex-col gap-2 bg-background-secondary w-80 h-fit items-center'>
        <div className='flex relative'>
            <img className='w-full' src={SyncInfoImg} alt="" />
            <CloseBtn style='absolute right-0 pr-4 pt-4'/>
        </div>
        
        <div className='flex flex-col px-4 pb-4 items-center gap-2'>
            <div className="flex items-center w-full gap-2">
                <hr className="flex-grow border-t border-text-caption"/>
                <span className="font-bold text-xs text-text-caption">Estamos trabajando para tí</span>
                <hr className="flex-grow border-t border-text-caption" />
            </div>
            <div className='flex flex-col w-full items-start'>
                <h2 className='text-primary-darkBlue-300 text-base font-bold'>Sincronizando información</h2>
                <img src={`${
                    state === 'Sin conexion' ? ErrorBar :
                    state === 'Procesando' ? ProcessBar :
                    state === 'Completado' ? CompletedBar : ''
                    }`} alt="" />
            </div>

            <h4 className={`${
                state === 'Sin conexion' ? 'text-system-errorColor' : 'text-text-caption'
                } self-start text-xxs font-bold`}>
                {`${
                    state === 'Sin conexion' ? 'No tienes conexión a internet' :
                    state === 'Procesando' ? 'Ya casi estamos...' :
                    state === 'Completado' ? '¡Completado!' : ''
                }` }
            </h4>
        </div>
    </div>
  )
}

SyncInfo.propTypes = {
    state: PropTypes.oneOf(['Sin conexion', 'Procesando', 'Completado']),
};