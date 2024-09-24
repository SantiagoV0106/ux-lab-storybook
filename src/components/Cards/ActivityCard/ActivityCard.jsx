import PropTypes from "prop-types"
import banner_img from '../../assets/images/activity_card_banner.jpg'
import { Button } from "../../Buttons/Button"

export const ActivityCard = ({ title, caption, information, progress, btnLabel, showBtn1, showBtn2, showProgressBar, showTitle, showInfo }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex flex-col gap-[13px] p-4 min-w-[340px] min-h-[150px]`} >
                <header className="flex flex-col items-center justify-center">
                    <img src={banner_img} alt="activity_banner_img" />
                    <div className="flex gap-1 justify-between items-center w-full">
                        <div className="w-full max-w-[60px] h-[1px] bg-neutral-300"></div>
                        <p className="text-xs text-center font-bold text-text-text w-fit" id="activity-caption-banner">{caption}</p>
                        <div className="w-full max-w-[60px] h-[1px] bg-neutral-300"></div>
                    </div>
                </header>
                {
                    showTitle ?
                        <h2 className="text-4xl font-black text-system-errorColor text-center" >{title}</h2>
                        :
                        null
                }
                {
                    showProgressBar ?
                        <div className="flex flex-col gap-[2px]">
                            <div className="bg-neutral-200 w-[310px] h-2 rounded-full" >
                                <div className={`${progress == 100 ? 'bg-system-successColor' : progress == 60 ? 'bg-system-warningColor' : 'bg-system-errorColor'} h-full rounded-full`} style={{
                                    width: `${progress}%`
                                }}></div>
                            </div>
                            <p className="text-xs text-text-text">{caption}</p>
                        </div>
                        :
                        null
                }
                <div className="flex flex-col gap-3">
                    {
                        showBtn1 ?
                            <Button type='primary' appearance='filled' label={btnLabel} iconSrc='add' iconPosition='left' state='enabled' />
                            :
                            null
                    }
                    {
                        showBtn2 ?
                            <Button type='primary' appearance='filled' label={btnLabel} iconSrc='add' iconPosition='left' state='enabled' />
                            :
                            null
                    }
                </div>
                {
                    showInfo ?
                        <p className="text-system-errorColor text-center">{information}</p>
                        :
                        null
                }
            </section>
        </article>
    )
}


ActivityCard.propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    progress: PropTypes.oneOf([10, 60, 100]).isRequired,
    btnLabel : PropTypes.string.isRequired,
    showBtn1: PropTypes.bool,
    showBtn2: PropTypes.bool,
    showProgressBar: PropTypes.bool,
    showTitle: PropTypes.bool,
    showInfo: PropTypes.bool,
}