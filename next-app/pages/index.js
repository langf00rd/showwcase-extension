/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { HiPencil } from 'react-icons/hi'
import { TbJumpRope } from 'react-icons/tb'
import { BsFillBookmarkFill } from 'react-icons/bs'
import TrendingShows from "../components/tabViews/TrendingShows";
import RecommendedShows from "../components/tabViews/RecommendedShows";

const TABS = [
  'Trending shows',
  'Recommended shows',
  'New shows',
]

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <main className="text-[16px] h-screen w-screen overflow-hidden">
      <header className="border-b border-b-borderColor p-5 flex items-center justify-between">
        <b>Showwcase extension</b>
        <button>Sign in</button>
      </header>
      <div className="w-screen h-screen flex">
        <div className="flex-[1] p-5 border-r border-r-borderColor">
          <label className={styles.label}>Create</label>
          <ul className="text-gray-500 flex flex-col gap-3 mt-5">
            <li className={styles.iconLink}>
              <HiPencil />
              <p>Write a show</p>
            </li>
            <li className={styles.iconLink}>
              <TbJumpRope />
              <p>Create a thread</p>
            </li>
            <li className={styles.iconLink}>
              <BsFillBookmarkFill />
              <p>My bookmarks</p>
            </li>
          </ul>
        </div>
        <div className="flex-[5] p-5 lg:px-32 md:px-20 overflow-y-scroll pb-32">
          <ul className="flex gap-4 items-center my-8">
            {TABS.map((item, index) => <li onClick={() => setActiveTab(item)} className={activeTab === item ? styles.activeTab : styles.tab} key={index}>
              <p>{item}</p>
            </li>)}
          </ul>
          {activeTab === TABS[0] && <TrendingShows />}
          {activeTab === TABS[1] && <RecommendedShows />}
        </div>
      </div>
    </main>
  );
}

const sharedStyles = 'w-max py-2 px-3 rounded-xl cursor-pointer transition-all hover:opacity-80 select-none'

const styles = {
  tab: `${sharedStyles} bg-gray-900 text-gray-500`,
  activeTab: `${sharedStyles} bg-brand`,
  label: 'text-gray-500 font-bold',
  iconLink: 'flex items-center whitespace-nowrap gap-1 transition-all hover:text-brand cursor-pointer'
}

export default IndexPage;
