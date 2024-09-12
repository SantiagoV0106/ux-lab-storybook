import WarningImg from '../../assets/warning.png'
import { Button } from '../Buttons/Button'
import { CloseBtn } from './CloseBtn'

export const Warning = () => {
    return (
        <div className='flex flex-col gap-2 bg-background-secondary w-80 h-fit items-center'>
            <div className='flex relative'>
                <img className='w-full' src={WarningImg} alt="" />
                <CloseBtn style='absolute right-4 top-4'/>
            </div>
            
            <div className='flex flex-col items-center w-full'>
                <div className="flex items-center w-full gap-4">
                    <hr className="flex-grow border-t border-neutral-300"/>
                    <span className="font-bold text-xs text-text-caption">{'Debes completar las preguntas (*)'} </span>
                    <hr className="flex-grow border-t border-neutral-300" />
                </div>
            </div>

            <div className='flex flex-col w-60 items-center py-2 px-2'>
                <h2 className='text-primary-darkBlue-300 text-2xl font-bold py-1 px-1'>Página incompleta</h2>
                <p className='text-xs font-bold text-text-caption text-center'>La página está incompleta, debes llenar todas las preguntas obligatorias *.</p>
            </div>

            <Button
                    type="primary"
                    appearance="filled"
                    state="enabled"
                >Regresar</Button>

            <h2 className='text-base text-system-errorColor font-regular'>Continuar sin complementar</h2>
        </div>
      )
}
