import PropTypes from "prop-types"

const CheckIcon = () => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 17.5C13.4183 17.5 17 13.9183 17 9.5C17 5.08172 13.4183 1.5 9 1.5C4.58172 1.5 1 5.08172 1 9.5C1 13.9183 4.58172 17.5 9 17.5ZM13.0203 7.95349C13.2155 7.75823 13.2155 7.44164 13.0203 7.24638C12.825 7.05112 12.5084 7.05112 12.3132 7.24638L8.00005 11.5595L5.68694 9.24638C5.49167 9.05112 5.17509 9.05112 4.97983 9.24638C4.78457 9.44164 4.78457 9.75823 4.97983 9.95349L7.6465 12.6202C7.84176 12.8154 8.15834 12.8154 8.3536 12.6202L13.0203 7.95349Z" fill="#0041A3" />
        </svg>



    )
}

const BagCheckedIcon = () => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.43 4.68504H14.13L11.595 2.15004C11.3925 1.94754 11.0625 1.94754 10.8525 2.15004C10.65 2.35254 10.65 2.68254 10.8525 2.89254L12.645 4.68504H5.355L7.1475 2.89254C7.35 2.69004 7.35 2.36004 7.1475 2.15004C6.945 1.94754 6.615 1.94754 6.405 2.15004L3.8775 4.68504H3.5775C2.9025 4.68504 1.5 4.68504 1.5 6.60504C1.5 7.33254 1.65 7.81254 1.965 8.12754C2.145 8.31504 2.3625 8.41254 2.595 8.46504C2.8125 8.51754 3.045 8.52504 3.27 8.52504H14.73C14.9625 8.52504 15.18 8.51004 15.39 8.46504C16.02 8.31504 16.5 7.86504 16.5 6.60504C16.5 4.68504 15.0975 4.68504 14.43 4.68504Z" fill="#0041A3" />
            <path d="M14.3175 9.5H3.68249C3.21749 9.5 2.86499 9.9125 2.93999 10.37L3.56999 14.225C3.77999 15.515 4.34249 17 6.83999 17H11.0475C13.575 17 14.025 15.7325 14.295 14.315L15.0525 10.3925C15.1425 9.9275 14.79 9.5 14.3175 9.5ZM11.16 12.5375L8.72249 14.7875C8.61749 14.885 8.48249 14.9375 8.33999 14.9375C8.19749 14.9375 8.05499 14.885 7.94249 14.7725L6.81749 13.6475C6.59999 13.43 6.59999 13.07 6.81749 12.8525C7.04249 12.635 7.39499 12.635 7.61999 12.8525L8.36249 13.595L10.4025 11.7125C10.6275 11.5025 10.9875 11.5175 11.1975 11.7425C11.4075 11.975 11.3925 12.3275 11.16 12.5375Z" fill="#0041A3" />
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

export const ReportCard = ({ title, caption, showArrow, info1, info2, info3, showIconInfo1, showIconInfo2, showIconInfo3 }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-[4px]  py-4 px-2 min-w-[395px]`}
                style={{
                    boxShadow: '0px 9px 19px -7px rgba(105, 105, 105, 0.15)'
                }}
            >
                <div className="flex justify-between items-center " >
                    <div className="flex items-center gap-2">
                    <i><CheckIcon /></i>
                    <div className="flex flex-col">
                        <p className="text-neutral-800 text-sm font-bold">{title}</p>
                        <p className="text-neutral-800 text-sm">{caption}</p>
                    </div>
                    </div>
                    <div className="flex justify-between items-center gap-1" >
                        <div className="flex gap-1 items-center">
                            {
                                showIconInfo1 ?
                                    <i><BagCheckedIcon /></i>
                                    :
                                    null
                            }
                            <p className="text-neutral-800 text-xs" >({info1})</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {
                                showIconInfo2 ?
                                    <i><BagCheckedIcon /></i>
                                    :
                                    null
                            }
                            <p className="text-neutral-800 text-xs" >({info2})</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {
                                showIconInfo3 ?
                                    <i><BagCheckedIcon /></i>
                                    :
                                    null
                            }
                            <p className="text-neutral-800 text-xs" >({info3})</p>
                        </div>

                    </div>
                    {
                        showArrow ?
                            <i><ArrowIcon /></i>
                            :
                            null
                    }
                </div>
            </section>
        </article>
    )
}

ReportCard.propTypes = {
    title : PropTypes.string.isRequired,
    caption : PropTypes.string.isRequired,
    info1 : PropTypes.number.isRequired,
    info2 : PropTypes.number.isRequired,
    info3 : PropTypes.number.isRequired,
    showIconInfo1 : PropTypes.bool,
    showIconInfo2 : PropTypes.bool,
    showIconInfo3 : PropTypes.bool,
    showArrow : PropTypes.bool,
}