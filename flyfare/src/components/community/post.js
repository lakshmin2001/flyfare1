import React, { useState } from 'react';
import './post.css';
import { FaRegCircleUser, FaRegBookmark, FaSquareShareNodes } from "react-icons/fa6";

const Post = ({ post }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    e.preventDefault();
    const link = `${window.location.origin}/c2`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="username"><FaRegCircleUser /><span className='user'>{post.username}</span></div>
        <div className="days-ago"><span className='bookmark'>{post.daysAgo} days ago</span><FaRegBookmark /></div>
      </div>

      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>

      <div className="post-footer">
        <span>{post.likes} ❤</span>
        <span>{post.comments} 💬</span>
        <span>{post.views} 👀</span>
        <button className="share-button" onClick={handleCopyLink}>
          <span><FaSquareShareNodes /></span> 
          <span className="copy-link-text">Copy Link</span>
        </button>
        {copied && <span className="copied-message">Copied!</span>}
      </div>
    </div>
  );
};

export default Post;
