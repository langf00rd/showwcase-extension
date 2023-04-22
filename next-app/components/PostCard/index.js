/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FiMoreVertical, FiX } from 'react-icons/fi'

export default function PostCard({ title, dateTime, readTime, image }) {
    const [showMenu, setShowMenu] = useState(false);

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { month: "short", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }

    return (
        <li className="bg-gray-900 p-5 select-none rounded-xl relative border border-gray-800 hover:border-gray-600 cursor-pointer transition-all flex flex-col justify-between">
            {showMenu && <div className="border border-gray-800 p-5 rounded-xl absolute bg-gray-900 right-5 z-10 top-[50px]">
                <ul className="text-gray-400 flex flex-col gap-3">
                    <li className={styles.iconLink}>
                        <BsFillBookmarkFill />
                        <p>Add to bookmarks</p>
                    </li>
                </ul>
            </div>}
            <div className="mb-3 flex flex-col gap-3">
                <h3 className={`font-medium w-[200px] text-[20px] max-lines-2 ${title.length > 45 && "text-ellipsis"}`}>{title}</h3>
                <p className="text-gray-400">
                    {formatDate(dateTime)} • <span>{readTime}</span>
                </p>
                {!showMenu ? <FiMoreVertical onClick={() => setShowMenu(!showMenu)} className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer" size={25} />
                    : <FiX onClick={() => setShowMenu(!showMenu)} className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer" size={25} />}
            </div>
            <img loading="lazy" src={image} className="w-full h-[170px] object-cover rounded-xl" alt={"blog post image of" + title} />
        </li>
    );
}

const styles = {
    iconLink: 'flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer'
}