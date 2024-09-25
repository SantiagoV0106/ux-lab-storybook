import PropTypes from 'prop-types';
import { CloseBtn } from './CloseBtn';
import { Button } from '../Buttons/Button';
import { ToggleSwitch } from '../Controls/ToggleSwitch';
import { Select } from '../Inputs/Select/Select';

export const FilterOptions = ({type}) => {
  return (
    <div className='flex flex-col gap-3 bg-background-secondary w-80 h-fit items-center relative py-6 px-4 rounded-lg'>
            
        <CloseBtn style='absolute right-4 top-4'/>

        <div className='flex flex-col items-center gap-1 w-full'>
          <h2 className='text-primary-darkBlue-300 text-2xl font-bold'>Opciones de filtrar</h2>
          <div className="flex items-center w-full gap-1">
            <hr className="flex-grow border-t border-text-text"/>
            <span className="font-bold text-xs text-text-text">Ahora debes tomar la fotografía</span>
            <hr className="flex-grow border-t border-text-text" />
          </div>
        </div>

        <div className='flex flex-col w-full gap-6'>

          {
            type === 'toggles' 
            ? (
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full justify-between'>
                  <p className='font-bold text-sm text-text-text'>PDV ejecutados</p>
                  <ToggleSwitch isOn={false} />
                </div>

                <div className='flex flex-row w-full justify-between'>
                  <p className='font-bold text-sm text-text-text'>PDV no ejecutadas</p>
                  <ToggleSwitch isOn={false} />
                </div>
              </div>
            ) : type === 'inputs'
            ? (
              <div className='flex flex-col gap-3 w-full'>
                <Select
                  label='Tipo de pedido' 
                  defaultOption='Seleccione el tipo de pedido' 
                  type='text'
                  required={true}/>
                <Select
                  label='Tipo de pedido' 
                  defaultOption='Seleccione el tipo de pedido' 
                  type='text'
                  required={true}/>
              </div>
            ): null
          }
          

          <Button 
            type="primary"
            appearance="filled"
            state="enabled"
            iconSrc="arrowRight"
            iconPosition="right"
          >Aplicar Filtros</Button>
        </div>

        <h2 className='text-base text-system-errorColor font-regular'>Trabajar con datos locales</h2>

    </div>

  )
}

FilterOptions.propTypes = {
    type: PropTypes.oneOf(['toggles', 'inputs']),
};