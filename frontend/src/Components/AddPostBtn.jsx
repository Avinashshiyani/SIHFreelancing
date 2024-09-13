import React from "react";
import { AiOutlinePlus } from "react-icons/ai"; // Importing a plus icon from react-icons

const AddPostBtn = () => {
  return (
    <button
      className="fixed bottom-8 right-8 z-20 bg-primary hover:bg-hover text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
      aria-label="Add Post"
    >
      {/* Add the plus icon inside the button */}
      <AiOutlinePlus size={24} />
    </button>
  );
};

export default AddPostBtn;
