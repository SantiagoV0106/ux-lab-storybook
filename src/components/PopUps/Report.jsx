import PropTypes from 'prop-types';
import { CloseBtn } from './CloseBtn';
import { Button } from '../Buttons/Button';
import { Select } from '../Inputs/Select/Select';
import { UploadFileCard } from '../Cards/UploadCard/UploadCard';

export const Report = ({step}) => {
    return (
        <div className='flex flex-col gap-3 bg-background-secondary w-80 h-fit items-center relative py-6 px-6 rounded-lg'>
                
            <CloseBtn style='absolute right-4 top-4'/>


            <div className='flex flex-col w-full gap-6'>
                <div className='flex flex-col gap-1  items-center'>
                    <div className="flex items-center w-full gap-1 py-1 px-1">
                        <hr className="flex-grow border-t border-neutral-300"/>
                        <span className="font-semibold text-xs text-text-caption py-1 px-1">¿Desea realizar un reporte?</span>
                        <hr className="flex-grow border-t border-neutral-300" />
                    </div>

                    <h2 className='text-primary-darkBlue-300 text-2xl font-bold py-1 px-1'>Notificar vía correo</h2>
                </div>

                {
                    step === '2' 
                    ? (
                    <div className='flex flex-col gap-3 w-full'>
                        <Select
                            label='Correos electrónicos' 
                            defaultOption='Seleccione los correos' 
                            type='email'
                            required={false}/>

                        <UploadFileCard
                            fileUpload={false}
                        />

                        <UploadFileCard
                            fileUpload={false}
                        />
                    </div>
                    ) : null
                }
                
                <Button
                    type="primary"
                    appearance="filled"
                    state="enabled"
                >Sí, notificar vía correo</Button>
                
            </div>
        
    
            <h2 className='text-base text-system-errorColor font-regular'>Salir sin notificar</h2>
    
        </div>
    
      )
}


Report.propTypes = {
    step: PropTypes.oneOf(['1', '2']),
  };
  