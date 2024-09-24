import PropTypes from "prop-types"

const PDFIcon = () => {
    return (
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.66 32.8013H9.38C8.61618 32.8013 7.88364 32.4978 7.34353 31.9577C6.80343 31.4176 6.5 30.6851 6.5 29.9213V6.88127C6.5 6.11744 6.80343 5.3849 7.34353 4.8448C7.88364 4.30469 8.61618 4.00127 9.38 4.00127H19.46C19.4729 3.99958 19.486 3.99958 19.4989 4.00127H19.5075C19.5211 4.00552 19.5351 4.00841 19.5493 4.00991C19.676 4.01855 19.8013 4.04303 19.9222 4.08335H19.9827C20.0093 4.10195 20.0343 4.12266 20.0576 4.14527C20.2145 4.21502 20.3574 4.3126 20.4795 4.43327L29.1195 13.0733C29.2402 13.1954 29.3378 13.3383 29.4075 13.4952C29.4201 13.5263 29.4311 13.558 29.4406 13.5902L29.455 13.6305C29.4954 13.7501 29.5184 13.8753 29.5256 14.0021C29.5269 14.0164 29.5302 14.0305 29.5357 14.0438V14.0525C29.538 14.0619 29.5394 14.0716 29.54 14.0813V29.9213C29.54 30.6851 29.2366 31.4176 28.6965 31.9577C28.1564 32.4978 27.4238 32.8013 26.66 32.8013ZM21.5106 21.2813V28.4813H22.8642V25.5437H24.9666V24.3369H22.8642V22.4923H25.22V21.2813H21.5106ZM16.1826 21.2813V28.4813H17.9192C18.6478 28.5173 19.3534 28.2206 19.8373 27.6749C20.3339 27.0411 20.5827 26.2482 20.5371 25.4443V24.2779C20.5706 23.4825 20.3148 22.7018 19.8171 22.0805C19.3491 21.5477 18.6651 21.2539 17.9552 21.2813H16.1826ZM10.82 21.2813V28.4813H12.1736V25.9483H13.075C13.677 25.9814 14.2645 25.7582 14.6936 25.3349C15.1026 24.8769 15.3142 24.2779 15.284 23.6645C15.3107 23.037 15.0987 22.4226 14.6907 21.9451C14.4914 21.7241 14.2456 21.5499 13.971 21.4351C13.6964 21.3204 13.3997 21.2678 13.1024 21.2813H10.82ZM19.46 6.88127V14.0813H26.66L19.46 6.88127ZM17.9422 27.2745H17.5362V22.4923H18.0286C18.2007 22.4822 18.3726 22.5153 18.5286 22.5888C18.6846 22.6622 18.8196 22.7736 18.9214 22.9128C19.1331 23.3491 19.2238 23.8344 19.1835 24.3182V25.5696C19.2152 26.0304 19.1158 26.4912 18.8955 26.8958C18.7793 27.0315 18.6317 27.1369 18.4656 27.2029C18.2996 27.2689 18.1199 27.2935 17.9422 27.2745ZM13.1024 24.7373H12.1722V22.4923H13.1154C13.2312 22.4936 13.3448 22.5242 13.4456 22.5814C13.5463 22.6386 13.6309 22.7204 13.6914 22.8192C13.8469 23.0769 13.9218 23.3736 13.9074 23.6745C13.9254 23.9546 13.851 24.2328 13.6957 24.4665C13.6251 24.5552 13.5345 24.6259 13.4314 24.6729C13.3284 24.72 13.2156 24.742 13.1024 24.7373Z" fill="white" />
        </svg>

    )
}

export const DocumentCard = ({ title, caption, body }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex justify-between gap-5 p-4 max-w-[346px]`} >
                <div className="flex flex-col gap-5">
                    <header>
                        <h2 className="text-primary-darkBlue-500 font-bold" >{title}</h2>
                        <p className="text-text-text text-xs">{caption}</p>
                    </header>
                    <div>
                        <p className="text-xs" >{body}</p>
                    </div>
                </div>
                <div className="bg-primary-darkBlue-500 flex items-center justify-center min-w-[98px] rounded-[4px]">
                    <i><PDFIcon /></i>
                </div>
            </section>
        </article>
    )
}


DocumentCard.propTypes = {
    title : PropTypes.string.isRequired,
    caption : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}