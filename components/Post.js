import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon,EmojiHappyIcon } from "@heroicons/react/outline"

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

function Post({id,username,user,img,caption}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
        {/* Header */}
            <div className="flex items-center p-5">
                <img className="rounded-full w-12 object-contain border p-1 mr-3 " src={img} alt=""/>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>
{/* Image */}
            <img className="object-cover w-full" src="https://links.papareact.com/ocw" alt=""/>

            {/* Button */}
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <HeartIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                    <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                    <PaperAirplaneIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                </div>
                <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
            </div>

            {/* caption */}
            <p className="p-5 truncate">
                <span>{username}</span>{caption}
            </p>
            {/* comment */}

            {/* input box */}
            <form className="flex item-center p-4">
                <EmojiHappyIcon className="h-7 " />
                <input type="text" placeholder="Add a comment ..." className=" border-none flex-1 focus:ring-0 outline-none"/>
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post
