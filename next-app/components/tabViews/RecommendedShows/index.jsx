import React from "react";
import PostCard from "../../PostCard";

export default function RecommendedShows({ shows }) {
    return <ul className="grid grid-cols-3 gap-5">
        {shows.map((item, index) => <PostCard
            key={index}
            title={item.title}
            views={item.views}
            link={`https://www.showwcase.com/show/${item.id}/${item.slug}`}
            summary={item.projectSummary}
            dateTime={item.publishedDate || item.createdAt}
            readTime={item.readingStats.text}
            image={item.coverImage}
        />)}
    </ul>
}
