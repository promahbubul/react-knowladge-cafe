import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-[#1111110D] rounded-md p-5">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
