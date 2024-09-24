import PropTypes from 'prop-types'
import profile_pic from '../../assets/images/user_profile_pic.jpg'

export const UserCardNotification = ({title, body, caption}) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex p-4 w-[335px] min-h-[85px]`} >
                <div className='flex gap-4'>
                    <img className='rounded-full w-[38px] h-[38px]' src={profile_pic} alt="profile_pic" />
                    <div className='flex flex-col gap-1'>
                        <header>
                            <h2 className='text-xs text-primary-darkBlue-500 font-bold'>{title}</h2>
                            <p className='text-xs text-text-text'>{body}</p>
                        </header>
                        <p className='text-[10px] text-neutral-700 '>{caption}</p>
                    </div>
                </div>
            </section>
        </article>
    )
}

UserCardNotification.propTypes = {
        title : PropTypes.string.isRequired,
        body : PropTypes.string.isRequired,
        caption : PropTypes.string.isRequired,
}