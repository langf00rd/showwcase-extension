/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineTrash } from "react-icons/hi";
import formatDate from "../../utils/formatDate.util";
import formatNumber from "../../utils/formatNumber.util";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useStore } from "../../store";
import { TABS } from "../../constants/tabs";

export default function PostCard({
  title,
  dateTime,
  readTime,
  image,
  summary,
  views,
  link,
  totalUpvotes,
  totalComments,
  id,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showPostInfo, setShowPostInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const activeTab = useStore((state) => state.activeTab);
  const bookmarks = useStore((state) => state.bookmarks);
  const setBookmarks = useStore((state) => state.setBookmarks);
  const apiKey = useStore((state) => state.apiKey);
  const setShowAPIKeyInputModal = useStore((state) => state.setShowAPIKeyInputModal);

  const getBookmarks = async () => {
    if (!apiKey) return;

    let headersList = {
      Accept: "*/*",
      "x-api-key": apiKey,
    };

    let reqOptions = {
      url: "https://cache.showwcase.com/bookmarks",
      method: "GET",
      headers: headersList,
    };

    await axios
      .request(reqOptions)
      .then((response) => {
        let bookmarkedShows = response.data.filter(
          (item) => typeof item.slug === "string"
        );
        setBookmarks(bookmarkedShows);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const saveBookmark = (id) => {
    if (!apiKey) {
      setShowAPIKeyInputModal(true);
      return;
    }
    const options = {
      method: "POST",
      url: "https://cache.showwcase.com/bookmarks",
      headers: {
        "x-api-key": apiKey,
      },
      data: { projectId: id },
    };
    setShowMenu(false);
    const toastId = toast.loading("saving...");
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.dismiss(toastId);
        toast.success("Saved to bookmarks 🚀");
        getBookmarks();
        console.log("bookamarks", bookmarks);
      })
      .catch(function (error) {
        console.error(error);
        toast.dismiss(toastId);
        toast.error("something went wrong");
      });
  };

  const removeBookmark = (id) => {
    if (!apiKey) {
      setShowAPIKeyInputModal(true);
      console.log("no api key");
      return;
    }
    const options = {
      method: "DELETE",
      url: "https://cache.showwcase.com/bookmarks",
      headers: {
        Authorization: apiKey,
      },
      data: { projectId: id },
    };
    const toastId = toast.loading("removing...");
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.dismiss(toastId);
        toast.success("removed to bookmarks");
        getBookmarks();
      })
      .catch(function (error) {
        console.error(error);
        toast.dismiss(toastId);
        toast.error("something went wrong");
      });
  };

  const PostInfoModal = () => {
    if (showPostInfo)
      return (
        <div className="bg-[#101827e8] w-screen h-screen overflow-x-hidden overflow-y-scroll fixed left-0 top-0 z-20 flex flex-col items-center justify-center">
          <FiX
            onClick={() => setShowPostInfo(false)}
            className="cursor-pointer hover:text-brand transition-all my-10"
            size={50}
          />
          <div className="post-info-modal p-10 rounded-xl rounded-b-none h-full overflow-x-hidden overflow-scroll w-full max-w-3xl border border-gray-700 bg-gray-800">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center gap-5">
              <p className="text-gray-500 flex items-center gap-3">
                {formatDate(dateTime)} • {readTime}
              </p>
              <Stats />
            </div>
            {image ? (
              <img
                loading="lazy"
                src={image}
                className="w-full my-5 rounded-xl bg-gray-700"
                alt={"blog post image of " + title}
              />
            ) : (
              <div className="w-full my-5 rounded-xl bg-gray-700 h-[300px]" />
            )}
            <div className="my-5 gap-5 flex items-center justify-end">
              <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-brand transition-all">
                {!bookmarks.some((bookmark) => bookmark.id === id) && (
                  <BsFillBookmarkFill />
                )}
                <button
                  disabled={bookmarks.some((bookmark) => bookmark.id === id)}
                  className="whitespace-nowrap flex gap-3 disabled:cursor-not-allowed"
                  onClick={() => {
                    bookmarks.some((bookmark) => bookmark.id === id)
                      ? toast.success("Bookmark already saved 🙂")
                      : saveBookmark(id);
                  }}
                >
                  {bookmarks.some((bookmark) => bookmark.id === id)
                    ? "Already Bookmarked ✅"
                    : "Add to bookmarks"}
                </button>
              </div>
              <Link passHref href={link} target="_blank" rel="noreferrer">
                <button className={styles.button}>
                  <p>Read on Showwcase</p>
                  <HiOutlineExternalLink />
                </button>
              </Link>
            </div>
            {summary && (
              <>
                <label className={styles.label}>Summary</label>
                <p className="text-gray-300">{summary}</p>
              </>
            )}
          </div>
        </div>
      );

    return <></>;
  };

  const Stats = () => {
    return (
      <ul className="flex items-center justify-between text-gray-500 w-full max-w-[150px]">
        <li className="flex text-sm items-center gap-1">
          <AiFillHeart />
          <p>{totalUpvotes}</p>
        </li>
        <li className="flex text-sm items-center gap-1">
          <FaComment />
          <p>{totalComments}</p>
        </li>
        <li className="flex text-sm items-center gap-1">
          <AiFillEye />
          <p>{formatNumber(views)}</p>
        </li>
      </ul>
    );
  };

  return (
    <li className="relative">
      <PostInfoModal />
      {showMenu && (
        <div className="border border-gray-800 p-5 rounded-xl absolute bg-gray-900 right-5 z-10 top-[50px]">
          <ul className="text-gray-400 flex flex-col gap-3">
            <li className={styles.iconLink}>
              {!bookmarks.some((bookmark) => bookmark.id === id) && (
                <BsFillBookmarkFill />
              )}
              <button
                disabled={bookmarks.some((bookmark) => bookmark.id === id)}
                className="whitespace-nowrap flex gap-3 disabled:cursor-not-allowed"
                onClick={() => {
                  bookmarks.some((bookmark) => bookmark.id === id)
                    ? toast.success("Bookmark already saved 🙂")
                    : saveBookmark(id);
                }}
              >
                {bookmarks.some((bookmark) => bookmark.id === id)
                  ? "Already Bookmarked ✅"
                  : "Add to bookmarks"}
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="bg-gray-900  max-w-[350px] p-5 select-none rounded-xl relative border border-gray-800 hover:border-gray-600 cursor-pointer transition-all flex flex-col justify-between">
        <div className="mb-3 flex flex-col gap-3">
          <h3 className="font-medium w-[200px] text-[20px] max-lines-2">{title}</h3>
          <p className="text-sm text-gray-400 flex items-center gap-3">
            {formatDate(dateTime)} • {readTime}
          </p>
          {activeTab === TABS[2] ? (
            <HiOutlineTrash
              onClick={() => removeBookmark(id)}
              className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer"
              size={28}
            />
          ) : !showMenu ? (
            <FiMoreVertical
              onClick={() => setShowMenu(!showMenu)}
              className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer"
              size={25}
            />
          ) : (
            <FiX
              onClick={() => setShowMenu(!showMenu)}
              className="hover:bg-gray-800 py-1 rounded-md absolute right-3 transition-all cursor-pointer"
              size={25}
            />
          )}
        </div>
        {image ? (
          <img
            onClick={() => setShowPostInfo(true)}
            loading="lazy"
            src={image}
            className="w-full h-[170px] object-cover rounded-xl bg-gray-800"
            alt={"blog post image of " + title}
          />
        ) : (
          <div
            onClick={() => setShowPostInfo(true)}
            className="w-full h-[170px] object-cover rounded-xl bg-gray-800"
          />
        )}
        <div className="m-3" />
        <Stats />
      </div>
    </li>
  );
}

const styles = {
  label: "text-gray-500 font-bold mb-1",
  iconLink:
    "flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer",
  button: `w-max py-2 px-3 rounded-xl cursor-pointer flex items-center gap-2 bg-white transition-all hover:opacity-80 select-none text-gray-800`,
};
