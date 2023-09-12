import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h3  className="text-sm p-4 bg-white mb-4 rounded-lg">{title}</h3>

    </div>
  );
};

export default Bookmark;
