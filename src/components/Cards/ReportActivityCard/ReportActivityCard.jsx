import PropTypes from 'prop-types'
import report_activity_banner from '../../assets/images/report_activity_banner.jpg'
import { Button } from "../../Buttons/Button"
import { Select } from '../../Inputs/Select/Select'

const CloseIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L14 14M14 4L4 14" stroke="#0041A3" strokeWidth="2" strokeLinecap="round" />
        </svg>

    )
}

export const ReportActivityCard = ({options}) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex flex-col gap-[13px] max-w-[340px] min-h-[150px]`} >
                <header className=" relative rounded-lg">
                    <i  className='absolute top-1 right-[10px] cursor-pointer'><CloseIcon/></i>
                    <img className='rounded-t-lg' src={report_activity_banner} alt="activity_banner_img" />
                </header>
                <div className="flex gap-1 justify-between items-center w-full mb-3 px-3">
                    <div className={`w-full max-w-[60px] h-[1px] bg-neutral-300`}></div>
                    <p className={`text-xs text-center font-bold text-text-text w-fit`}>¿Ha pasado algo?</p>
                    <div className={`w-full max-w-[60px] h-[1px] bg-neutral-300`}></div>
                </div>
                <div className='flex flex-col w-full pb-7 px-3 gap-2'>

                    <div className=' self-center max-w-[226px] mb-3'>
                        <h2 className='text-2xl font-bold text-system-errorColor text-center'>
                            ¿Quieres reportar esta actividad?
                        </h2>
                        <p className='text-xs text-center font-bold text-text-caption'>
                            Selecciona las opciones
                        </p>
                    </div>

                    <Select label='Tipo de novedad' defaultOption='Seleccione un tipo de novedad' options={options} name='Select' />
                            <label className="flex flex-col gap-[4px] text-[#0041A3] font-bold w-full">
                                <span>
                                    Observaciones
                                </span>
                                <textarea  className="outline-none rounded-md bg-white border-2 border-[#B0C4E2] p-[8px] placeholder:text-[#B0C4E2] font-normal min-h-[120px] focus:border-[#0041A3] focus:placeholder:text-[#0041A3] resize-none" />
                            </label>
                    <div className='flex flex-col justify-center mt-8'>
                        <Button type='primary' appearance='filled' label='Reportar Novedad' state='enabled' />

                    </div>

                </div>
            </section>
        </article>
    )
}

ReportActivityCard.propTypes = {
    options: PropTypes.array.isRequired,

}