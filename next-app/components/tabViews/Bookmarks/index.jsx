import React, { useState } from 'react'
import PostCard from "../../PostCard"
import { APIKeyInputModal } from "../../modals/APIKeyInputModal"
import { useStore } from "../../../store";
import { toast } from 'react-hot-toast'

export default function Bookmarks({ shows, loading }) {
  const showAPIKeyInputModal = useStore(
    (state) => state.showAPIKeyInputModal
  );

  const setShowAPIKeyInputModal = useStore(
    (state) => state.setShowAPIKeyInputModal
  );


  const handleSaveAPIKey = (apiKey) => {
    if (!apiKey) {
      alert('Enter a valid API key')
      return
    }
    localStorage.setItem('shcapk', apiKey)
    toast.success('Saved 🎉')
    setShowAPIKeyInputModal(false)
    // window.location.reload()
  }

  if (loading) return <p>Loading...</p>

  if (!localStorage.getItem('shcapk')) return <div className="text-gray-400">
    <APIKeyInputModal show={showAPIKeyInputModal} onSaveKey={handleSaveAPIKey} onHide={() => setShowAPIKeyInputModal(false)} />
    <p>Set your Showwcase API key to fetch your bookmarks. <span onClick={() => setShowAPIKeyInputModal(true)} className="text-brand underline cursor-pointer hover:no-underline">Click here</span></p>
  </div>

  if (shows.length < 1) return <div className="text-gray-400">
    <p>You have no bookmarks</p>
  </div>

  return (
    <>
      <ul className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        {shows.map((item, index) => (
          <PostCard
            key={index}
            id={item.id}
            title={item.title}
            views={item.views}
            totalUpvotes={item.totalUpvotes}
            totalComments={item.totalComments}
            link={`https://www.showwcase.com/show/${item.id}/${item.slug}`}
            summary={item.projectSummary}
            dateTime={item.publishedDate || item.createdAt}
            readTime={item.readingStats.text}
            image={item.coverImageUrl || "/next-assets/placeholder.jpg"}
          />
        ))}
      </ul>
    </>
  );
}
