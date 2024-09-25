import PropTypes from 'prop-types'
import novedad_card_banner from '../../assets/images/novedad_card_banner.jpg'
import { Button } from '../../Buttons/Button'
import { ImageCard } from '../ImageCard/ImageCard'
import { Select } from '../../Inputs/Select/Select'

export const IssueCard = ({ state, options }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex flex-col gap-[13px] max-w-[340px] min-h-[150px]`} >
                <header className="flex flex-col items-center justify-center rounded-lg">
                    <img className='rounded-t-lg' src={novedad_card_banner} alt="activity_banner_img" />
                </header>
                <div className="flex gap-1 justify-between items-center w-full mb-3 px-3">
                    <div className={`w-full max-w-[60px] h-[1px] ${state === 'information' ? 'bg-neutral-300' : state === 'state' ? 'bg-system-successColor' : 'bg-system-errorColor'}`}></div>
                    <p className={`text-xs text-center font-bold ${state === 'information' ? 'text-text-text' : state === 'state' ? 'text-system-successColor' : 'text-system-errorColor'} w-fit`}>{state === 'information' ? '¿tienes algún problema?' : state === 'state' ? 'Seguimos en' : '¿Repetimos?'}</p>
                    <div className={`w-full max-w-[60px] h-[1px] ${state === 'information' ? 'bg-neutral-300' : state === 'state' ? 'bg-system-successColor' : 'bg-system-errorColor'}`}></div>
                </div>
                {
                    state === 'information' ?
                        <div className='flex flex-col w-full pb-7 px-3 gap-2'>
                            <Select label='Tipo de novedad' defaultOption='Seleccione un tipo de novedad' options={options} name='Select' />
                            <label className="flex flex-col gap-[4px] text-[#0041A3] font-bold w-full">
                                <span>
                                    Observaciones
                                </span>
                                <textarea  className="outline-none rounded-md bg-white border-2 border-[#B0C4E2] p-[8px] placeholder:text-[#B0C4E2] font-normal min-h-[120px] focus:border-[#0041A3] focus:placeholder:text-[#0041A3] resize-none" />
                            </label>
                            <ImageCard />
                            <div className='flex flex-col gap-1 mt-5'>
                                <Button type='primary' appearance='filled' iconPosition='left' state='hovered'> Agregar Foto</Button>
                                <Button type='primary' appearance='filled' iconPosition='left' state='enabled'> Reportar Novedad </Button>
                            </div>
                        </div>
                        :
                        state === 'state' ?
                            <div className='flex flex-col w-full pb-4 px-3 gap-2'>
                                <h2 className="text-2xl font-black text-system-errorColor text-center" >Pendiente </h2>
                                <Button type='primary' appearance='filled' state='enabled'> Reportar Novedad </Button>
                                <p className='text-center text-system-errorColor'>Regresar a completar la actividad</p>
                            </div>
                            :
                            <div className='flex flex-col w-full pb-4 px-3 gap-2'>
                                <h2 className="text-xl font-bold text-primary-darkBlue-300 text-center" >¿Quieres capturar otra repetición de esta actividad? </h2>
                                <Button type='primary' appearance='filled' state='enabled'> No, ya está bien </Button>
                                <p className='text-center text-system-errorColor'>Sí, quiero hacerlo de nuevo</p>
                            </div>
                }
            </section>
        </article>
    )
}

IssueCard.propTypes = {
    options : PropTypes.array.isRequired,
    state: PropTypes.oneOf(['information', 'state', 'question']).isRequired
}