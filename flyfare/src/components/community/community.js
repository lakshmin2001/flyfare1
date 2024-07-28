import React, { useState, useEffect } from 'react';
import './community.css';
import { Link } from 'react-router-dom';
import Post from './post';
import Counselor from './counselor';
import S2 from './Cside/s2';
import Headerc from './Headerc';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CommunityApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(4); // Initially display 4 posts
  const [showAll, setShowAll] = useState(false); // State to manage "Show Less"

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          username: 'Anonymouskick',
          title: 'Trapped by Tradition: A Man\'s Struggle Between Family Duty and Personal Despair',
          content: 'Hi, I\'m a 32 year old man. I belong from a very lower middle class family but I was very good in studies, so I started living outside home in metro cities...',
          daysAgo: 52,
          likes: 5,
          comments: 1,
          views: 21
        },
        {
          id: 2,
          username: 'Hyperloop88',
          title: 'Concerned About My Children\'s Future Due to Physical Traits.',
          content: 'I\'m a 33-year-old woman, married to my husband for the past four years in an arranged setup, as our families know each other well. He is a very nice...',
          daysAgo: 36,
          likes: 0,
          comments: 1,
          views: 9
        },


        
        // Add more posts as needed
      ]);
      setLoading(false);
    }, 2000); // Simulating a delay
  }, []);

  const handleLoadMore = () => {
    if (visiblePosts === 4) {
      setVisiblePosts(visiblePosts + 4); // Load 4 more posts (total 8)
    } else {
      setVisiblePosts(visiblePosts + 5); // Load 5 more posts (total 13 or fewer)
    }
  };

  const handleShowLess = () => {
    setVisiblePosts(4); // Reset to show only the initial 4 posts
    setShowAll(false);
  };

  return (
    <div className="App">
      <Headerc />
      <main>
        <S2 />
        <div className="posts">
        <div className="line">
            <hr />
            <p>Sort by:  Top </p>
          </div>
          {loading ? (
            Array.from({ length: visiblePosts }).map((_, index) => (
              <div key={index} className="post-skeleton">
                <Skeleton height={40} width={150} />
                <br />
                <Skeleton count={3} />   <br />
              </div>
            ))
          ) : (

          
            posts.slice(0, visiblePosts).map((post) => (
              <Link to="/c2" className="colorlink" key={post.id}>
                <Post post={post} />
              </Link>
            ))
          )}
          {visiblePosts < posts.length && !loading && (
            <button className="load-more" onClick={handleLoadMore}>Load More</button>
          )}
          {visiblePosts >= posts.length && !loading && (
            <button className="show-less" onClick={handleShowLess}>Show Less</button>
          )}
        </div>
        <Counselor />
      </main>
      <footer>
        <nav>
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Refund Policy</a>
          <a href="/">Contact us</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Support</a>
        </nav>
        <p>© Fly Fare Technologies LLP 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CommunityApp;
