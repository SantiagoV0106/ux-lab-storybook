import PropTypes from "prop-types"
import mapImage from '../../assets/images/map_card_image.jpg'
import { Button } from "../../Buttons/Button";

export const MapCard = ({ start, btnLabel }) => {
    return (
        <article className="flex">
            <section
                style={{
                    backgroundImage: start === 'started' ? `url(${mapImage})` : 'none',
                    borderRadius: start === 'started' ? '8px' : 'none',
                }}
                className={`relative flex flex-col ${start === 'start' ? 'justify-center' : 'justify-end'} gap-2 ${start === 'start' ? ' py-9' : 'pt-9'} px-10 w-[340px] h-[162px]`} >
                {
                    start === 'start' ?
                        <>
                            <div style={{
                                backgroundImage: `url(${mapImage})`
                            }} className="absolute inset-0 bg-cover bg-no-repeat bg-center filter brightness-50 rounded-lg" ></div>
                            <div className="flex flex-col justify-center items-center filter-none gap-4 z-10">
                                <h2
                                    style={{
                                        letterSpacing: '1.5px'
                                    }}
                                    className="text-[10px] font-black text-center uppercase text-white">
                                    Para empezar con tus actividades inicia punto de venta
                                </h2>
                                <Button type='primary' appearance='filled' iconSrc='add' iconPosition='left' state='enabled' label={btnLabel} />
                            </div>
                        </>
                        :
                        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
                            <Button type='primary' appearance='filled' iconSrc='add' iconPosition='left' state='enabled' label={btnLabel} />
                        </div>
                }

            </section>
        </article>
    )
}

MapCard.propTypes = {
    start: PropTypes.oneOf(['start', 'started']).isRequired,
    btnLabel: PropTypes.string.isRequired
}
