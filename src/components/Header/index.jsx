import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="py-3 px-4 ">
            <div className="container mx-auto flex items-center justify-between max-w-7xl">

                {/* Left Section - Logo */}
                <div data-id="left-section" className="text-2xl font-bold text-main">
                    codedamn
                </div>

                <div className="flex gap-[24px] justify-between ">
                    {/* Middle Section - Search Input */}
                    <div data-id="input-div" className="flex items-center flex-1 mx-4 max-w-md border border-line rounded-input bg-surface focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                        <div className="pl-3 pr-2 flex items-center justify-center">
                            <CiSearch className="text-muted text-xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 bg-transparent focus:outline-none text-sm text-main placeholder:text-muted"
                        />
                        <div className="pr-2 flex items-center border-l border-line pl-2 ml-1 my-1">
                            <button className="flex items-center space-x-1 text-sm font-medium text-muted hover:text-main transition-colors px-1">
                                <span>Courses</span>
                                <IoIosArrowDown />
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Icons & Avatar */}
                    <div data-id="buttons-div" className="flex items-center space-x-6">

                        {/* Thunderbolt Badge */}
                        <div className="relative flex items-center cursor-pointer hover:scale-105 transition-transform">
                            <AiFillThunderbolt className="text-3xl text-primary" />
                            <span className="absolute -top-1 -right-1 bg-badge-pink text-white
                                         text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-surface">
                                2
                            </span>
                        </div>

                        {/* Notification Badge */}
                        <div data-id="notification" className="relative cursor-pointer hover:scale-105 transition-transform">
                            <IoIosNotificationsOutline className="text-3xl text-muted hover:text-main transition-colors" />
                            <span className="absolute -top-1 -right-1 bg-badge-pink text-white
                                         text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-surface">
                                1
                            </span>
                        </div>

                        {/* Avatar */}
                        <div data-id="user-div" className="cursor-pointer hover:opacity-90 transition-opacity">
                            <img
                                src="/assets/avatar.jpg"
                                alt="avatar"
                                className="rounded-full border-2 border-line hover:border-primary transition-colors"
                                width={42}
                                height={42}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header