import noProfile from '../Header/noProfile.webp'

export const Header = ({searchBar}) => {
    return (
        <header className="flex items-center justify-between text-slate-700 bg-[#0041A3] px-4 py-2 max-w-[412px]">
            <MenuIcon/>

            <div className="flex items-center gap-4 p-2 rounded-md bg-white">
                <SearchIcon/>
                <input placeholder="Buscar" className="appearance-none outline-none placeholder:text-[#B1CEE2]" type="text" />
            </div>

            <div className="flex items-center gap-4">
                <BellIcon/>
                <img src={noProfile} className="aspect-square w-10 rounded-full" alt="" />
            </div>
        </header>
    )
}

const MenuIcon = () => <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="4" width="15.2857" height="1.44286" rx="0.721429" fill="#F4F7F9" stroke="#F4F7F9"/>
<rect x="1.5" y="8.88574" width="15.2857" height="1.44286" rx="0.721429" fill="#F4F7F9" stroke="#F4F7F9"/>
<rect x="1.5" y="13.7715" width="15.2857" height="1.44286" rx="0.721429" fill="#F4F7F9" stroke="#F4F7F9"/>
</svg>

const BellIcon = () => <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00001 16.7857C10.0137 16.7857 10.8359 15.9224 10.8359 14.8572H7.16414C7.16414 15.9224 7.98637 16.7857 9.00001 16.7857ZM15.1815 12.2744C14.627 11.6488 13.5895 10.7077 13.5895 7.62503C13.5895 5.28363 12.026 3.4093 9.9178 2.94945V2.32146C9.9178 1.789 9.50684 1.35718 9.00001 1.35718C8.49319 1.35718 8.08222 1.789 8.08222 2.32146V2.94945C5.974 3.4093 4.41049 5.28363 4.41049 7.62503C4.41049 10.7077 3.37302 11.6488 2.81856 12.2744C2.64637 12.4688 2.57003 12.7011 2.57146 12.9286C2.57462 13.4228 2.94397 13.8929 3.4927 13.8929H14.5073C15.0561 13.8929 15.4257 13.4228 15.4286 12.9286C15.43 12.7011 15.3537 12.4685 15.1815 12.2744Z" fill="#F4F7F9"/>
</svg>

const SearchIcon = () => <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12.5001L15.4286 15.9287M13.7143 8.64296C13.7143 11.72 11.2199 14.2144 8.14287 14.2144C5.06586 14.2144 2.57144 11.72 2.57144 8.64296C2.57144 5.56595 5.06586 3.07153 8.14287 3.07153C11.2199 3.07153 13.7143 5.56595 13.7143 8.64296Z" stroke="#B1CEE2" stroke-width="1.5" stroke-linecap="round"/>
</svg>
