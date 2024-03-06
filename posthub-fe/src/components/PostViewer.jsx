
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPlus } from "react-icons/bs";
import PostList from "./PostList";
import { addMessage } from "../redux/action";
import { apipost } from "../services/apiClient";

const Post = () => {
  const dispatch = useDispatch();
  const [newPostText, setNewPostText] = useState("");

  const handleAddPost = async (text) => {
    let request = {
      url: 'add',
      data: { body: text }
    };
    await apipost(request);
    dispatch(addMessage(text));
  }

  const handleAddPostClick = () => {
    console.log("Adding post", newPostText);
    if (newPostText.trim() !== "") {
      handleAddPost(newPostText.trim());
      setNewPostText("");
    }
    setNewPostText("");
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h1 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Post hub</h1>
      <PostList />
      <div className="flex items-center mb-4">
        <input value={newPostText} onChange={(e) => setNewPostText(e.target.value)} type="text" name="addPostInput" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" id="addPostInput" placeholder="What's on your mind?" />
        <button className="m1-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleAddPostClick}><BsPlus /></button>
      </div>
    </div>
  );
}

export default Post;