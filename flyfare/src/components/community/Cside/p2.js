import React, { useState } from 'react';
import './p2.css';
import { FaRegCircleUser, FaRegBookmark, FaSquareShareNodes, FaReply } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";




const P2 = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleCopyLink = (e) => {
    e.preventDefault();
    const link = `${window.location.origin}/c2`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleComments = () => setShowComments(!showComments);

  const promptLogin = () => {
    alert("Please log in to comment or reply.");
  };
  const promptBookmark = () => {
    alert("Please log in to bookmark.");
  };




  return (

    <>
    <Link to="/space"><div className='postpage2'>
    <p><FaArrowLeftLong /> Post</p>
    </div></Link>

   
    <div className="post2">
      <div className="post-header2">
        <div className="username2"><FaRegCircleUser /><span className='user'>{post.username}</span></div>
        <div className="days-ago2"><span className='bookmark'>{post.daysAgo} days ago</span><FaRegBookmark onClick={promptBookmark}></FaRegBookmark></div>
      </div>

      <h2 className="post-title2">{post.title}</h2>
      <p className="post-description2">{post.description}</p>
      <p className="post-content2">{post.content}</p>

      <div className="post-footer2">
        <span>{post.likes} ❤</span>
        <span>{post.comments.length} 💬</span>
        <span>{post.views} 👀</span>
        <button className="share-button2" onClick={handleCopyLink}>
          <span><FaSquareShareNodes /></span>
          <span className="copy-link-text2">Copy Link</span>
        </button>
        {copied && <span className="copied-message2">Copied!</span>}
      </div>

      <button className="toggle-comments2" onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
        <div className="comments-section2">
     
          <div className="comment-input2">
            <input type="text" placeholder="Enter your comment" />
            <button onClick={promptLogin}>Comment</button>
          </div>



          {post.comments.map(comment => (
            <div key={comment.id} className="comment2">
              <p><span><FaRegCircleUser /></span><strong>{comment.username}</strong>{comment.daysAgo} days ago</p>
              <p className='cdesc'>{comment.content}</p>
              {/* <button className="reply-button2"><Link to="/login">Reply</Link></button> */}


              <button className="reply-button2" onClick={promptLogin}>
                  <FaReply /> Reply
                </button>



            </div>
          ))}




        </div>
      )}
    </div>
    
    
    
    
    
    </>
    
  );
};

export default P2;
