import React from 'react';
import './postdetails.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaSquareShareNodes } from "react-icons/fa6";





const PostDetails = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="username"><FaRegCircleUser /> {post.username}</div>
        <div className="days-ago">{post.daysAgo} days ago <FaRegBookmark />
        </div>
        
      </div>
      
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      {/* <div className="post-footer">
        <span>{post.likes} ❤</span>
        <span>{post.comments} 💬</span>
        <span>{post.views} 👀</span>
        <span><FaSquareShareNodes /></span>
        

      </div> */}
    </div>
  );
}

export default PostDetails;
