import React from 'react'
import PostCard from "../../PostCard"

export default function TrendingShows({ shows, loading }) {
  if (loading) return <p>Loading...</p>
  console.log(shows)

  return (
    <ul className="grid  place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5">
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
  );
}
