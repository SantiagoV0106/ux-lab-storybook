import PropTypes from "prop-types"

const DocsIcon = () => {
    return (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1111 3.25V4.75C15.1111 6.1225 14.5209 6.865 13.3333 6.9775C13.2196 6.9925 13.0987 7 12.9778 7H3.02222C2.90133 7 2.78044 6.9925 2.66666 6.9775C1.47911 6.865 0.888885 6.1225 0.888885 4.75V3.25C0.888885 1.75 1.6 1 3.02222 1H12.9778C14.4 1 15.1111 1.75 15.1111 3.25Z" fill="#0041A3" />
            <path d="M3.37778 8C2.98667 8 2.66667 8.33488 2.66667 8.74419V13.7674C2.66667 15.2558 3.02223 16 4.8 16H11.2C12.9778 16 13.3333 15.2558 13.3333 13.7674V8.74419C13.3333 8.33488 13.0133 8 12.6222 8H3.37778ZM9.29423 11.3488H6.70578C6.41423 11.3488 6.17245 11.0958 6.17245 10.7907C6.17245 10.4856 6.41423 10.2326 6.70578 10.2326H9.29423C9.58578 10.2326 9.82756 10.4856 9.82756 10.7907C9.82756 11.0958 9.58578 11.3488 9.29423 11.3488Z" fill="#0041A3" />
        </svg>

    )
}

const CloseIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1C4.592 1 1 4.592 1 9C1 13.408 4.592 17 9 17C13.408 17 17 13.408 17 9C17 4.592 13.408 1 9 1ZM11.688 10.84C11.92 11.072 11.92 11.456 11.688 11.688C11.568 11.808 11.416 11.864 11.264 11.864C11.112 11.864 10.96 11.808 10.84 11.688L9 9.848L7.16 11.688C7.04 11.808 6.888 11.864 6.736 11.864C6.584 11.864 6.432 11.808 6.312 11.688C6.08 11.456 6.08 11.072 6.312 10.84L8.152 9L6.312 7.16C6.08 6.928 6.08 6.544 6.312 6.312C6.544 6.08 6.928 6.08 7.16 6.312L9 8.152L10.84 6.312C11.072 6.08 11.456 6.08 11.688 6.312C11.92 6.544 11.92 6.928 11.688 7.16L9.848 9L11.688 10.84Z" fill="#0041A3" />
        </svg>

    )
}

export const SmallCard = ({ title, showDocsIcon, showCloseIcon }) => {
    return (
        <article className="flex items-center gap-3">
            <section className={` bg-background-secondary rounded-[4px] flex justify-between items-center gap-2 py-2 px-1 min-w-[340px]`} >
                <div className="flex gap-1 items-center">
                    {
                        showDocsIcon ?
                            <i><DocsIcon /></i>
                            :
                            null
                    }
                    <p className="text-xs text-neutral-800 font-normal" >{title}</p>
                </div>
            </section>
            {
                showCloseIcon ?
                    <i><CloseIcon /></i>
                    :
                    null
            }
        </article>
    )
}


SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    showDocsIcon: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
}