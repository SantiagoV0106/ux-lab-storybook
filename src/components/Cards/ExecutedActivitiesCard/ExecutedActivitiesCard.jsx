import PropTypes from "prop-types"
import './executedActivitiesCard.css'

const BagCheckedIcon = () => {
    return (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1533 7.44H25.62L21.1133 2.93333C20.7533 2.57333 20.1666 2.57333 19.7933 2.93333C19.4333 3.29333 19.4333 3.88 19.7933 4.25333L22.98 7.44H10.02L13.2066 4.25333C13.5666 3.89333 13.5666 3.30666 13.2066 2.93333C12.8466 2.57333 12.26 2.57333 11.8866 2.93333L7.39329 7.44H6.85996C5.65996 7.44 3.16663 7.44 3.16663 10.8533C3.16663 12.1467 3.43329 13 3.99329 13.56C4.31329 13.8933 4.69996 14.0667 5.11329 14.16C5.49996 14.2533 5.91329 14.2667 6.31329 14.2667H26.6866C27.1 14.2667 27.4866 14.24 27.86 14.16C28.98 13.8933 29.8333 13.0933 29.8333 10.8533C29.8333 7.44 27.34 7.44 26.1533 7.44Z" fill="#0041A3" />
            <path d="M25.9534 16H7.04668C6.22001 16 5.59335 16.7333 5.72668 17.5467L6.84668 24.4C7.22002 26.6933 8.22001 29.3333 12.66 29.3333H20.14C24.6333 29.3333 25.4333 27.08 25.9133 24.56L27.26 17.5867C27.42 16.76 26.7934 16 25.9534 16ZM20.34 21.4L16.0067 25.4C15.82 25.5733 15.58 25.6667 15.3267 25.6667C15.0733 25.6667 14.82 25.5733 14.62 25.3733L12.62 23.3733C12.2333 22.9867 12.2333 22.3467 12.62 21.96C13.02 21.5733 13.6467 21.5733 14.0467 21.96L15.3667 23.28L18.9933 19.9333C19.3933 19.56 20.0333 19.5867 20.4067 19.9867C20.78 20.4 20.7533 21.0267 20.34 21.4Z" fill="#0041A3" />
        </svg>

    )
}

const content_unidad1_3 = [
    {
        id: 'unidad-1',
        inventario: '50/100'
    },
    {
        id: 'unidad-2',
        inventario: '50/100'
    },
    {
        id: 'unidad-3',
        inventario: '50/100'
    },
]

const content_unidad_4 = [
    {
        id: 'unidad-1',
        inventario: 6
    },
    {
        id: 'unidad-2',
        inventario: 2
    },
    {
        id: 'unidad-3',
        extra: 2
    },
    {
        id: 'unidad-4',
        inventario: 9
    },
]

export const ExecutedActivitiesCard = ({ variant }) => {
    return (
        <article className="flex">
            <header>
                <h2 className="text-primary-darkBlue-300 font-black">
                    Resumen actividades ejecutadas
                </h2>
                <section className="bg-background-secondary text-center rounded-lg flex gap-2 items-center py-2 px-8 min-w-[342px] h-[66px]"
                    id={`variant-${variant}`}
                >
                    {
                        variant === 'unidad-1' &&
                        (<p className="text-primary-darkBlue-300 font-black text-4xl"> 12 / 15 </p>)
                    }
                    {
                        variant === 'unidad-1-3' &&
                        (
                            <>
                                {
                                    content_unidad1_3.map(({ id, inventario }) => {
                                        return (
                                            <div key={id} className="text-primary-darkBlue-300 flex items-center gap-1">
                                                <i><BagCheckedIcon /></i>
                                                <div className="flex flex-col items-start justify-start">
                                                    <p className="text-text-text"> {inventario}</p>
                                                    <p className="text-xs text-text-text">Inventario</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </>
                        )
                    }
                    {
                        variant === 'unidad-4' &&
                        (
                            <>
                                {
                                    content_unidad_4.map(({ id, inventario, extra }) => {
                                        return (
                                            <div key={id} className="text-primary-darkBlue-300 flex items-center gap-1">
                                                <i><BagCheckedIcon /></i>
                                                <div className="flex flex-col items-start justify-start">
                                                    <p className="text-text-text"> {inventario ? inventario : extra}</p>
                                                    <p className="text-xs text-text-text">{inventario ? 'Inventario' : 'Extra'}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </>
                        )
                    }
                </section>
            </header>
        </article>
    )
}

ExecutedActivitiesCard.propTypes = {
    variant: PropTypes.oneOf(['unidad-1', 'unidad-1-3', 'unidad-4']).isRequired
}