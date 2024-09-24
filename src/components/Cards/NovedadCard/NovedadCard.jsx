import PropTypes from 'prop-types'
import novedad_card_banner from '../../assets/images/novedad_card_banner.jpg'
import { Button } from '../../Buttons/Button'
import { ImageCard } from '../FotosTomadas/ImageCard'

export const NovedadCard = ({ state }) => {
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
                            <div className=''>
                                <label className='text-primary-darkBlue-300 text-xs font-bold' htmlFor="novedad">Tipo de novedad</label>
                                <input className='w-full border border-primary-blue-200 p-1 rounded-[4px]' type="text" name="novedad" id="novedad" />
                            </div>
                            <div>
                                <label className='text-primary-darkBlue-300 text-xs font-bold' htmlFor="novedad">Observaciones</label>
                                <input className='w-full h-20 border border-primary-blue-200 p-1 rounded-[4px] focus:outline-none focus:ring-2 ' type="text" name="novedad" id="novedad" />
                            </div>
                            <ImageCard />
                            <div className='flex flex-col gap-1 mt-5'>
                                <Button type='primary' appearance='filled' label='Agregar foto' iconPosition='left' state='hovered' />
                                <Button type='primary' appearance='filled' label='Reportar Novedad' iconPosition='left' state='enabled' />
                            </div>
                        </div>
                        :
                        state === 'state' ?
                            <div className='flex flex-col w-full pb-4 px-3 gap-2'>
                                <h2 className="text-2xl font-black text-system-errorColor text-center" >Pendiente </h2>
                                <Button type='primary' appearance='filled' label='Reportar Novedad' state='enabled' />
                                <p className='text-center text-system-errorColor'>Regresar a completar la actividad</p>
                            </div>
                            :
                            <div className='flex flex-col w-full pb-4 px-3 gap-2'>
                                <h2 className="text-xl font-bold text-primary-darkBlue-300 text-center" >¿Quieres capturar otra repetición de esta actividad? </h2>
                                <Button type='primary' appearance='filled' label='No, ya está bien' state='enabled' />
                                <p className='text-center text-system-errorColor'>Sí, quiero hacerlo de nuevo</p>
                            </div>
                }
            </section>
        </article>
    )
}

NovedadCard.propTypes = {
    state: PropTypes.oneOf(['information', 'state', 'question']).isRequired
}