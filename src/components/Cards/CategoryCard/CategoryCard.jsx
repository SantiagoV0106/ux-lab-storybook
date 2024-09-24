import PropTypes from "prop-types"
import './categoryCard.css'

const CategoryIcon = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8571 8.78521V4.04363C22.8571 2.57102 22.1988 1.97571 20.5634 1.97571H16.408C14.7725 1.97571 14.1143 2.57102 14.1143 4.04363V8.77477C14.1143 10.2578 14.7725 10.8427 16.408 10.8427H20.5634C22.1988 10.8531 22.8571 10.2578 22.8571 8.78521Z" fill="#0041A3" />
            <path d="M22.8571 20.5347V16.3153C22.8571 14.6547 22.1988 13.9863 20.5634 13.9863H16.408C14.7725 13.9863 14.1143 14.6547 14.1143 16.3153V20.5347C14.1143 22.1953 14.7725 22.8638 16.408 22.8638H20.5634C22.1988 22.8638 22.8571 22.1953 22.8571 20.5347Z" fill="#0041A3" />
            <path d="M11.0286 8.78521V4.04363C11.0286 2.57102 10.3703 1.97571 8.73485 1.97571H4.57942C2.94399 1.97571 2.28571 2.57102 2.28571 4.04363V8.77477C2.28571 10.2578 2.94399 10.8427 4.57942 10.8427H8.73485C10.3703 10.8531 11.0286 10.2578 11.0286 8.78521Z" fill="#0041A3" />
            <path d="M11.0286 20.5347V16.3153C11.0286 14.6547 10.3703 13.9863 8.73485 13.9863H4.57942C2.94399 13.9863 2.28571 14.6547 2.28571 16.3153V20.5347C2.28571 22.1953 2.94399 22.8638 4.57942 22.8638H8.73485C10.3703 22.8638 11.0286 22.1953 11.0286 20.5347Z" fill="#0041A3" />
        </svg>

    )
}

export const CategoryCard = ({ category, label, number, showIcon, showNumber }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex justify-between items-center py-2 px-3 w-[335px] min-h-[55px]`} >
                <div className="flex gap-2 items-center">
                {
                    showIcon ?
                        <i><CategoryIcon /></i>
                        :
                        null
                }
                    <h2 className="text-text-text font-bold" >{category}</h2>
                    <p className="text-xs" id="category-card-label" >{label}</p>
                </div>
                {
                    showNumber ?
                        <p>{number}</p>
                        :
                        null
                }
            </section>
        </article>
    )
}


CategoryCard.propTypes = {
    category: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    number : PropTypes.number,
    showIcon : PropTypes.bool,
    showNumber : PropTypes.bool,

}