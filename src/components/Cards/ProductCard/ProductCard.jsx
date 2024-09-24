import PropTypes from "prop-types"
import { Checkbox } from "../../Controls/Checkbox"

const BagCheckedIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2404 5.58006H18.8404L15.4604 2.20006C15.1904 1.93006 14.7504 1.93006 14.4704 2.20006C14.2004 2.47006 14.2004 2.91006 14.4704 3.19006L16.8604 5.58006H7.14043L9.53043 3.19006C9.80043 2.92006 9.80043 2.48006 9.53043 2.20006C9.26043 1.93006 8.82043 1.93006 8.54043 2.20006L5.17043 5.58006H4.77043C3.87043 5.58006 2.00043 5.58006 2.00043 8.14006C2.00043 9.11006 2.20043 9.75006 2.62043 10.1701C2.86043 10.4201 3.15043 10.5501 3.46043 10.6201C3.75043 10.6901 4.06043 10.7001 4.36043 10.7001H19.6404C19.9504 10.7001 20.2404 10.6801 20.5204 10.6201C21.3604 10.4201 22.0004 9.82006 22.0004 8.14006C22.0004 5.58006 20.1304 5.58006 19.2404 5.58006Z" fill="#0041A3" />
            <path d="M19.0904 12H4.91044C4.29044 12 3.82044 12.55 3.92044 13.16L4.76044 18.3C5.04044 20.02 5.79044 22 9.12044 22H14.7304C18.1004 22 18.7004 20.31 19.0604 18.42L20.0704 13.19C20.1904 12.57 19.7204 12 19.0904 12ZM14.8804 16.05L11.6304 19.05C11.4904 19.18 11.3104 19.25 11.1204 19.25C10.9304 19.25 10.7404 19.18 10.5904 19.03L9.09044 17.53C8.80044 17.24 8.80044 16.76 9.09044 16.47C9.39044 16.18 9.86044 16.18 10.1604 16.47L11.1504 17.46L13.8704 14.95C14.1704 14.67 14.6504 14.69 14.9304 14.99C15.2104 15.3 15.1904 15.77 14.8804 16.05Z" fill="#0041A3" />
        </svg>

    )
}

export const ProductCard = ({
    showCheckBox,
    caption,
    number1,
    number2,
    title,
    showIcon,
    variant }) => {
    return (
        <article className="flex">
            <section className={`bg-background-secondary rounded-lg  py-4 px-2 min-w-[395px]`}>
                <div className="flex gap-[30px] justify-between items-center" >
                    <div className="flex items-center gap-2">
                        {
                            showCheckBox && variant !== 'twoIcons' ?
                                <Checkbox state="enabled" />
                                :
                                null
                        }
                        <div className="flex flex-col">
                            <p className="text-neutral-800 text-sm font-bold">{title}</p>
                            <p className="text-neutral-800 text-sm">{caption}</p>
                        </div>
                    </div>
                    <div className={`flex ${variant !== 'twoIcons' ? 'justify-between' : 'justify-center gap-10'}  items-center flex-1`}>
                        {
                            variant !== 'twoIcons' ?
                                <>
                                    <p className="text-xs font-bold" >
                                        {number1}
                                    </p>
                                    <p className="text-xs font-bold">
                                        {number2}
                                    </p>
                                    {
                                        showIcon ?
                                            <i>
                                                <BagCheckedIcon />
                                            </i>
                                            :
                                            null
                                    }
                                </>
                                :
                                <>
                                    <i>
                                        <BagCheckedIcon />
                                    </i>
                                    <i>
                                        <BagCheckedIcon />
                                    </i>
                                </>
                        }
                    </div>
                </div>
            </section>
        </article>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    number1: PropTypes.number,
    number2: PropTypes.number,
    showCheckBox: PropTypes.bool,
    showIcon: PropTypes.bool,
    variant: PropTypes.oneOf(['oneIcon', 'twoIcons'])

}