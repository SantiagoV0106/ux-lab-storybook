import PropTypes from "prop-types"

export const TimeCard = ({time}) => {
    return(
        <article className="flex">
            <header>
                <h2 className="text-primary-darkBlue-300 font-black">
                    Tiempo estimado: 20 - 35 minutos
                </h2>
                <section className="bg-background-secondary text-center rounded-lg flex gap-2 items-center py-2 px-8 min-w-[342px] h-[66px] justify-center">
                   <p className='text-text-text font-black text-4xl'>{time}</p>
                </section>
            </header>
        </article>
    )
}

TimeCard.propTypes = {
    time : PropTypes.string.isRequired
}

TimeCard.defaultProps = {
    time : '00:00:00'
}
