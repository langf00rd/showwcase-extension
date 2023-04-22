import React, { useState } from 'react'
import PostCard from "../../PostCard"
import { APIKeyInputModal } from "../../modals/APIKeyInputModal"

export default function Bookmarks({ shows, loading }) {
    const [showAPIKeyInputModal, setShowAPIKeyInputModal] = useState(false)

    const handleSaveAPIKey = (apiKey) => {
        localStorage.setItem('shcapk', apiKey)
        alert('Saved 🎉')
        window.location.reload()
    }

    if (loading) return <p>Loading...</p>

    if (!localStorage.getItem('shcapk')) return <div className="text-gray-400">
        <APIKeyInputModal show={showAPIKeyInputModal} onSaveKey={handleSaveAPIKey} onHide={() => setShowAPIKeyInputModal(false)} />
        <p>Set your Showwcase API key to fetch your bookmarks. <span onClick={() => setShowAPIKeyInputModal(true)} className="text-brand underline cursor-pointer hover:no-underline">Click here</span></p>
    </div>

    if (shows.length < 1) return <div className="text-gray-400">
        <p>You have no bookmarks</p>
    </div>

    return <>
        <ul className="grid grid-cols-3 gap-5">
            {shows.map((item, index) => <PostCard
                key={index}
                title={item.title}
                views={item.views}
                totalUpvotes={item.totalUpvotes}
                totalComments={item.totalComments}
                link={`https://www.showwcase.com/show/${item.id}/${item.slug}`}
                summary={item.projectSummary}
                dateTime={item.publishedDate || item.createdAt}
                readTime={item.readingStats.text}
                image={item.coverImage}
            />)}
        </ul>
    </>
}