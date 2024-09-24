import banner from '../../assets/images/bienvenida_usuario_banner.jpg'
import profile_pic from '../../assets/images/user_profile_pic.jpg'

import PropTypes from "prop-types"


const LikeIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75981 2.25498L6.00052 6.01426C5.74945 6.26534 5.60695 6.61141 5.60695 6.97105V13.75C5.60695 14.4964 6.21767 15.1071 6.96409 15.1071H13.0712C13.6141 15.1071 14.1027 14.7814 14.3198 14.2861L16.532 9.12212C17.102 7.77855 16.118 6.28569 14.6591 6.28569H10.8252L11.4698 3.17784C11.5377 2.83855 11.4359 2.49248 11.1916 2.24819C10.7912 1.85462 10.1534 1.85462 9.75981 2.25498ZM2.89267 15.1071C3.63909 15.1071 4.24981 14.4964 4.24981 13.75V8.32141C4.24981 7.57498 3.63909 6.96426 2.89267 6.96426C2.14624 6.96426 1.53552 7.57498 1.53552 8.32141V13.75C1.53552 14.4964 2.14624 15.1071 2.89267 15.1071Z" fill="#0041A3" />
        </svg>


    )
}

const ShareIcon = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1071 12.2553C13.4919 12.2553 12.9414 12.4981 12.5204 12.8786L6.74852 9.51908C6.789 9.33289 6.82138 9.1467 6.82138 8.95242C6.82138 8.75813 6.789 8.57194 6.74852 8.38575L12.4557 5.05861C12.8928 5.46337 13.4676 5.71432 14.1071 5.71432C15.4509 5.71432 16.5357 4.62956 16.5357 3.28575C16.5357 1.94194 15.4509 0.857178 14.1071 0.857178C12.7633 0.857178 11.6785 1.94194 11.6785 3.28575C11.6785 3.48004 11.7109 3.66623 11.7514 3.85242L6.04423 7.17956C5.60709 6.7748 5.03233 6.52384 4.3928 6.52384C3.049 6.52384 1.96423 7.60861 1.96423 8.95242C1.96423 10.2962 3.049 11.381 4.3928 11.381C5.03233 11.381 5.60709 11.13 6.04423 10.7253L11.808 14.0929C11.7676 14.2629 11.7433 14.441 11.7433 14.6191C11.7433 15.9224 12.8038 16.9829 14.1071 16.9829C15.4104 16.9829 16.4709 15.9224 16.4709 14.6191C16.4709 13.3158 15.4104 12.2553 14.1071 12.2553Z" fill="#737373" />
        </svg>

    )
}

const MsgIcon = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1.5H5.5C3.43 1.5 1.75 3.1725 1.75 5.235V9.72V10.47C1.75 12.5325 3.43 14.205 5.5 14.205H6.625C6.8275 14.205 7.0975 14.34 7.225 14.505L8.35 15.9975C8.845 16.6575 9.655 16.6575 10.15 15.9975L11.275 14.505C11.4175 14.3175 11.6425 14.205 11.875 14.205H13C15.07 14.205 16.75 12.5325 16.75 10.47V5.235C16.75 3.1725 15.07 1.5 13 1.5ZM10 10.3125H5.5C5.1925 10.3125 4.9375 10.0575 4.9375 9.75C4.9375 9.4425 5.1925 9.1875 5.5 9.1875H10C10.3075 9.1875 10.5625 9.4425 10.5625 9.75C10.5625 10.0575 10.3075 10.3125 10 10.3125ZM13 6.5625H5.5C5.1925 6.5625 4.9375 6.3075 4.9375 6C4.9375 5.6925 5.1925 5.4375 5.5 5.4375H13C13.3075 5.4375 13.5625 5.6925 13.5625 6C13.5625 6.3075 13.3075 6.5625 13 6.5625Z" fill="#737373" />
        </svg>

    )
}

export const BienvenidaUsuarios = ({ showBanner, showProfile, title, caption, body }) => {
    return (
        <article className="flex">
            <section className="bg-background-secondary rounded-lg flex flex-col max-w-[340px] gap-2">
                {
                    showBanner ?
                        <header className="w-full">
                            <img className="rounded-t-lg" src={banner} alt="bienvenida_usuarios_banner" />
                        </header> :
                        null
                }

                <div className="flex justify-between items-start p-4 gap-4">
                    {
                        showProfile ?
                            <img className="w-[38px] rounded-full" src={profile_pic} alt="user_profile_pic" />
                            :
                            null
                    }
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="text-xs text-text-text">{caption}</p>
                            <h2 className="text-primary-darkBlue-300 text-sm font-bold" >{title} </h2>
                        </div>
                        <p className="text-xs text-text-text" >{body} </p>
                        <ul className="flex justify-between">
                            <li className="flex items-center gap-1">
                                <LikeIcon /> <span className="text-[10px] text-primary-darkBlue-300 font-bold">Te gusta</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <ShareIcon /> <span className="text-[10px] text-text-text font-bold">Compartélo</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <MsgIcon /> <span className="text-[10px] text-text-text font-bold" >Compartélo</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </article>
    )
}

BienvenidaUsuarios.propTypes = {
    caption: PropTypes.string.isRequire,
    title: PropTypes.string.isRequire,
    body: PropTypes.string.isRequire,
    showBanner: PropTypes.bool,
    showProfile: PropTypes.bool
}