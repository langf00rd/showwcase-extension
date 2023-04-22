import React from 'react'
import PostCard from "../../PostCard"

export default function RecommendedShows() {
    return (
        <ul className="grid grid-cols-3 gap-5">
            {[',', ',', ',', ',', ',', ',', ',', ',', ',', ',',].map((item, index) => <PostCard
                key={index}
                title='Svelte Furthers Enterprise Readiness with SvelteKit General'
                dateTime='Apr 19 • 3m read time'
                image='https://daily-now-res.cloudinary.com/image/upload/f_auto,q_auto/v1681948882/2bd9a5f8e1d4ed32daaa78052b8bdd32'
            />)}
        </ul>
    )
}
