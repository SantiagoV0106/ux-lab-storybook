import Icon from '../Icons'

export const Error = () => {
  return (
    <div className='flex flex-col w-80'>
        
        <h2 className='font-bold text-xs text-primary-darkBlue-300'>Title error</h2>
        <div className='flex flex-col w-full gap-1'>
            <div className='flex flex-row w-full align-middle justify-between bg-neutral-50 border-system-wariningColor border py-2 px-1 rounded-md mx-auto'>
                <p className='text-base font-bold text-primary-darkBlue-300 py-1 px-1'>0</p>
                <Icon  name='alert' fill='#FFCD00' />
            </div>
            <div className='flex flex-row w-full align-middle justify-between bg-system-wariningColor py-1 px-1 rounded-md mx-auto'>
                <p className='text-xxs font-regular text-primary-darkBlue-300 py-1 px-1'>caption error description</p>
                <Icon  name='alert' fill='#0041A3' />
            </div>
        </div>
        
    </div>
  )
}
