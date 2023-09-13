import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 space-y-5 ">
      <div className="text-xl rounded-md text-[#6047EC] bg-[#6047EC1A] border-[1px] border-[#6047EC] p-6 font-bold">
        Spent time on read : {readingTime} min
      </div>
      <div className="bg-[#1111110D] rounded-md p-5">
        <h2 className="text-2xl font-bold mb-6">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
