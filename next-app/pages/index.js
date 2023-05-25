/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react"
import { HiPencil } from "react-icons/hi"
import { TbJumpRope } from "react-icons/tb"
import { BsFillBagFill } from "react-icons/bs"
import { GoKey } from "react-icons/go"
import TrendingShows from "../components/tabViews/TrendingShows"
import RecommendedShows from "../components/tabViews/RecommendedShows"
import axios from "axios"
import Bookmarks from "../components/tabViews/Bookmarks"
import { APIKeyInputModal } from "../components/modals/APIKeyInputModal"
import { FiLogOut, FiMenu } from "react-icons/fi"

const TABS = [
  "✨ Recommended shows",
  "Trending shows",
  "My bookmarks"
]

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [trendingShows, setTrendingShows] = useState([])
  const [recommendedShows, setRecommendedShows] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAPIKeyInputModal, setShowAPIKeyInputModal] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [apiKey, setAPIKey] = useState('')
  const [showSideBar, setShowSideBar] = useState(false)
  const sidebarRef = useRef(null);

  useEffect(() => {
    setAPIKey(localStorage.getItem('shcapk') || '')
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSideBar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSideBar(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSideBar])

  const getTrendingShows = () => {
    const options = {
      method: "GET",
      url: "https://cache.showwcase.com/projects/trending",
      params: {
        limit: "1000"
      },
    }

    setLoading(true)

    axios.request(options).then(function(response) {
      const filter = response.data.filter((response) => {
        return response.title !== "" && response.readingStats?.words > 100
      })

      setTrendingShows(filter)
      setLoading(false)
    }).catch(function(error) {
      console.error(error)
      setLoading(false)
    })
  }

  const getRecommendedShows = () => {
    const options = {
      method: "GET",
      url: "https://cache.showwcase.com/projects/recommended",
      params: { limit: "1000" }
    }

    setLoading(true)

    axios.request(options).then(function(response) {
      const filter = response.data.filter((response) => {
        return response.title !== "" && response.readingStats?.words > 100
      })
      setRecommendedShows(filter)
      setLoading(false)
    }).catch(function(error) {
      console.error(error)
      setLoading(false)
    })
  }

  const getBookmarks = async () => {
    if (!apiKey) return

    let headersList = {
      "Accept": "*/*",
      "x-api-key": apiKey
    }

    let reqOptions = {
      url: "https://beta-cache.showwcase.com/bookmarks",
      method: "GET",
      headers: headersList,
    }

    setLoading(true)

    await axios.request(reqOptions).then(response => {
      let bookmarkedShows = response.data.filter(item => typeof item.slug === 'string')
      setBookmarks(bookmarkedShows)
      setLoading(false)
    }).catch(function(error) {
      console.error(error)
      setLoading(false)
    })
  }

  const handleSaveAPIKey = (apiKey) => {
    if (!apiKey) {
      alert('Enter a valid API key')
      return
    }
    localStorage.setItem('shcapk', apiKey)
    alert('Saved 🎉')
    window.location.reload()
  }

  useEffect(() => {
    if (activeTab === TABS[0]) getRecommendedShows()
    if (activeTab === TABS[1]) getTrendingShows()
    if (activeTab === TABS[2]) getBookmarks()
  }, [])

  useEffect(() => {
    if (activeTab === TABS[0] && recommendedShows.length < 1) getRecommendedShows()
    if (activeTab === TABS[1] && trendingShows.length < 1) getTrendingShows()
    if (activeTab === TABS[2] && bookmarks.length < 1) getBookmarks()
  }, [activeTab])

  const handleSignOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <main className="text-[16px] h-screen w-screen overflow-hidden">
      <APIKeyInputModal show={showAPIKeyInputModal} onSaveKey={handleSaveAPIKey} onHide={() => setShowAPIKeyInputModal(false)} />
      <header className="border-b border-b-borderColor p-5 flex justify-between items-center w-full">
        <FiMenu onClick={() => setShowSideBar(!showSideBar)} size={24} className="mx-2 lg:hidden block" />
        <div className="flex items-center gap-1 text-xl">
          <BsFillBagFill />
          <b>Showwcase</b>
        </div>
        <div className="cursor-pointer hover:text-brand transition-all">
          {apiKey
            ? <p onClick={() => setShowAccountMenu(!showAccountMenu)}>Settings</p>
            : <p onClick={() => setShowAPIKeyInputModal(true)}>Sign in</p>}
          {showAccountMenu && <div className="border border-gray-800 p-5 rounded-xl absolute bg-gray-900 right-5 z-10 top-[50px]">
            <ul className="text-gray-400 flex flex-col gap-3">
              <li className={styles.iconLink} onClick={handleSignOut}>
                <FiLogOut />
                <p>Sign out</p>
              </li>
              <li className={styles.iconLink} onClick={() => {
                setShowAccountMenu(false)
                setShowAPIKeyInputModal(true)
              }}>
                <GoKey />
                <p>Edit your API key</p>
              </li>
            </ul>
          </div>}
        </div>
      </header>
      <div className="w-screen h-screen flex">
        <div className="flex-[1] hidden lg:block p-5 border-r border-r-borderColor">
          <label className={styles.label}>Create</label>
          <ul className="text-gray-500 flex flex-col gap-3 mt-5">
            <li className={styles.iconLink}>
              <HiPencil />
              <p className="flex gap-3 items-center">Write a show <span className="text-[10px] bg-orange-200 p-1 px-2 rounded-full font-bold">SOON 🎉</span></p>
            </li>
            <li className={styles.iconLink}>
              <TbJumpRope />
              <p className="flex gap-3 items-center">Create a thread <span className="text-[10px] bg-orange-200 p-1 px-2 rounded-full font-bold">SOON 🎉</span></p>
            </li>
          </ul>
        </div>
        {
          showSideBar && (
            <div
              ref={sidebarRef}
              style={{ background: "linear-gradient(172deg, #00020a, #15003a)", height: "calc(100vh - 70px)" }} className=" z-20 w-[50%] absolute flex-[1] p-5 border-r border-r-borderColor">
              <label className={styles.label}>Create</label>
              <ul className="text-gray-500 flex flex-col gap-3 mt-5">
                <li className={styles.iconLink}>
                  <HiPencil />
                  <p className="flex gap-3 items-center">Write a show <span className="text-[10px] bg-orange-200 p-1 px-2 rounded-full font-bold">SOON 🎉</span></p>
                </li>
                <li className={styles.iconLink}>
                  <TbJumpRope />
                  <p className="flex gap-3 items-center">Create a thread <span className="text-[10px] bg-orange-200 p-1 px-2 rounded-full font-bold">SOON 🎉</span></p>
                </li>
              </ul>
            </div>
          )
        }
        <div className="flex-[5] p-5 lg:px-32 md:px-20 overflow-y-scroll pb-32">
          <ul className="flex gap-4 items-center justify-center flex-wrap md:justify-start my-8">
            {TABS.map((item, index) => (
              <li onClick={() => setActiveTab(item)} className={activeTab === item ? styles.activeTab : styles.tab} key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          {activeTab === TABS[0] && <RecommendedShows shows={recommendedShows} loading={loading} />}
          {activeTab === TABS[1] && <TrendingShows shows={trendingShows} loading={loading} />}
          {activeTab === TABS[2] && <Bookmarks shows={bookmarks} loading={loading} />}
        </div>
      </div>
    </main>
  )
}

const sharedStyles = "w-max py-2 px-3 rounded-xl cursor-pointer transition-all hover:opacity-80 select-none"

const styles = {
  tab: `${sharedStyles} bg-gray-900 text-gray-500`,
  activeTab: `${sharedStyles} bg-brand`,
  label: "text-gray-500 font-bold",
  iconLink: "flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer",
}

export default IndexPage
