import Image from "next/image";
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline";
import {HomeIcon } from "@heroicons/react/solid"
import Home from "../pages";

function Header() {
    return (
        <div className="shadow-sm  border-b bg-white sticky z-50">
            <div className="flex justify-between  bg-red max-w-6xl mx-5 lg:mx-auto">
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className="relative lg:hidden flex-shrink-0 w-10  cursor-pointer">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* Middle */}
                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
                            <SearchIcon className="h-5 w-5 text-gray-500 " />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer " />
                    <div className="relative hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125">
                            <PaperAirplaneIcon className="hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125 rotate-45" />
                            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                    3
                            </div>
                    </div>
                    
                    <PlusCircleIcon className="hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125"/>
                    <UserGroupIcon className="hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125"/>
                    <HeartIcon className="hidden h-6 cursor-pointer transition-all duration-150 ease-out navBtn md:inline-flex hover:scale-125"/>

                    <img src="https://links.papareact.com/3ke" alt="" className="h-10 rounded-full cursor-pointer " />
                </div>

            </div>
        </div>
    )
}

export default Header;