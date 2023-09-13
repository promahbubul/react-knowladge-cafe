import React from "react";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover_img,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-5">
      <img
        className="w-full rounded-xl"
        src={cover_img}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between ">
        <div className="flex gap-4">
          <img className="w-14 h-16 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#11111199]">{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <BsBookmark className="text-[#11111199]" />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="mr-2 text-[#11111199]" key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 underline font-bold "
      >
        Mark as Read
      </button>
    </div>
  );
};

export default Blog;
