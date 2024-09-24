import PropTypes from "prop-types"

const ImageIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.7598 6.04102L0.857147 10.9437V12.7712C0.857147 14.7042 2.43865 16.2857 4.3716 16.2857H12.7711C14.7041 16.2857 16.2856 14.7042 16.2856 12.7712V11.0843L13.5443 13.8256L5.7598 6.04102Z" fill="#0041A3" />
            <path d="M12.7887 0.857178H4.37159C2.43865 0.857178 0.857147 2.43869 0.857147 4.37164V8.57143L5.7598 3.66875L13.5443 11.4533L16.2856 8.71201V4.37164C16.3031 2.42111 14.7216 0.857178 12.7887 0.857178ZM12.6305 6.07616C11.8047 6.07616 11.1193 5.40841 11.1193 4.56494C11.1193 3.73904 11.7871 3.05372 12.6305 3.05372C13.474 3.05372 14.1418 3.72147 14.1418 4.56494C14.1418 5.39084 13.4564 6.07616 12.6305 6.07616Z" fill="#0041A3" />
        </svg>

    )
}

const ArrowIcon = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.9845 19.7458L8.52792 21.2249L17.5522 12.5767L8.52792 3.92847L6.9845 5.40758L14.4653 12.5767L6.9845 19.7458Z" fill="#0041A3" />
        </svg>
    )
}

export const UploadFileCard = ({ fileUpload }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex justify-between items-center gap-2 py-2 px-4 min-w-[340px]`} >
                {
                    !fileUpload ?
                        <>
                            <header>
                                <p className="text-xs text-text-text">Cargar archivo</p>
                                <h2 className="text-primary-darkBlue-300 text-sm font-medium">
                                    Adjuntar desde archivo
                                </h2>
                            </header>
                            <i><ArrowIcon /></i>
                        </>
                        :
                        <>
                            <header>
                                <p className="text-xs text-text-text">Imagen cargada</p>
                                <div className="flex gap-[10px]" >
                                    <i><ImageIcon /></i>
                                    <h2 className="text-primary-darkBlue-300 text-sm font-medium">
                                        Venta-023.png
                                    </h2>
                                </div>
                            </header>
                        </>

                }
            </section>
        </article>
    )
}

UploadFileCard.propTypes = {
    fileUpload : PropTypes.bool
}