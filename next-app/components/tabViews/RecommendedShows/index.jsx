import React from "react";
import PostCard from "../../PostCard";

export default function RecommendedShows({ shows }) {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {shows.map((item, index) => (
        <PostCard
          key={index}
          title={item.title}
          dateTime={item.publishedDate}
          readTime={item.readingStats.text}
          image={
            item.coverImage ||
            "https://daily-now-res.cloudinary.com/image/upload/f_auto,q_auto/v1681948882/2bd9a5f8e1d4ed32daaa78052b8bdd32"
          }
        />
      ))}
    </ul>
  );
}
