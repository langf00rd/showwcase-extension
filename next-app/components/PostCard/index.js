/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FiMoreVertical, FiX } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'
import formatDate from "../../utils/formatDate.util";
import formatNumber from "../../utils/formatNumber.util";
import Link from "next/link";

export default function PostCard({ title, dateTime, readTime, image, summary, views, link }) {
    const [showMenu, setShowMenu] = useState(false)
    const [showPostInfo, setShowPostInfo] = useState(false)

    const PostInfoModal = () => {
        if (showPostInfo) return <div className="bg-[#101827e8] w-screen h-screen overflow-y-scroll fixed left-0 top-0 z-10 flex flex-col items-center justify-center">
            <FiX onClick={() => setShowPostInfo(false)} className="cursor-pointer hover:text-brand transition-all my-10" size={50} />
            <div className="post-info-modal p-10 rounded-xl rounded-b-none h-full overflow-scroll w-full max-w-3xl border border-gray-700 bg-gray-800">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-gray-400 my-2">{formatDate(dateTime)} • <span>{readTime}</span> • <span>{formatNumber(views)} views</span></p>
                {image ? <img loading="lazy" src={image} className="w-full my-5 rounded-xl bg-gray-800" alt={"blog post image of" + title} />
                    : <div className="w-full h-[170px] object-cover rounded-xl bg-gray-800" />}
                <div className="my-5 gap-5 flex items-center justify-end">
                    <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-brand transition-all">
                        <BsFillBookmarkFill />
                        <p>Add to bookmark</p>
                    </div>
                    <Link passHref href={link}>
                        <a href={link} target='_blank' rel='noreferrer'>
                            <button className={styles.button}>
                                <p>Read on Showwcase</p>
                                <HiOutlineExternalLink />
                            </button>
                        </a>
                    </Link>
                </div>
                <p>{summary}</p>
            </div>
        </div>

        return <></>
    }

    return (
        <li className="relative">
            <PostInfoModal />
            {showMenu && <div className="border border-gray-800 p-5 rounded-xl absolute bg-gray-900 right-5 z-10 top-[50px]">
                <ul className="text-gray-400 flex flex-col gap-3">
                    <li className={styles.iconLink}>
                        <BsFillBookmarkFill />
                        <p>Add to bookmarks</p>
                    </li>
                </ul>
            </div>}
            <div className="bg-gray-900 p-5 select-none rounded-xl relative border border-gray-800 hover:border-gray-600 cursor-pointer transition-all flex flex-col justify-between">
                <div className="mb-3 flex flex-col gap-3">
                    <h3 className='font-medium w-[200px] text-[20px] max-lines-2'>{title}</h3>
                    <p className="text-sm text-gray-400">{formatDate(dateTime)} • <span>{readTime}</span> • <span>{formatNumber(views)} views</span></p>
                    {!showMenu ? <FiMoreVertical onClick={() => setShowMenu(!showMenu)} className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer" size={25} />
                        : <FiX onClick={() => setShowMenu(!showMenu)} className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer" size={25} />}
                </div>
                {image ? <img onClick={() => setShowPostInfo(true)} loading="lazy" src={image} className="w-full h-[170px] object-cover rounded-xl bg-gray-800" alt={"blog post image of" + title} />
                    : <div onClick={() => setShowPostInfo(true)} className="w-full h-[170px] object-cover rounded-xl bg-gray-800" />}
            </div>
        </li>
    );
}

const styles = {
    iconLink: 'flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer',
    button: `w-max py-2 px-3 rounded-xl cursor-pointer flex items-center gap-2 bg-white transition-all hover:opacity-80 select-none text-gray-800`,
}