import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './c2.css';
import { Link } from 'react-router-dom';
import P2 from './p2';
import Counselor from '../counselor';
import S2 from './s2';
import Headerc from '../Headerc';

function CommunityApp2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setPosts([



        {
          id: 1,
          username: 'Anonymouskick',
          title: 'Trapped by Tradition: A Man\'s Struggle Between Family Duty and Personal Despair',
          description: 'Hi, I’m a 32 year old man. I belong from a very lower middle class family but I was very good in studies, so I started living outside home in metro cities away from my parents to support them. I spent 8 years away from my home town. I got scholarship through which I became engineer and got a good job in Chennai. Everything was going more than I expected my life to be. I got a call from my parents that they have planned my marriage, they got me engaged when I was 16 year old, to a girl in the village. I couldn’t say no and got married to her. My wife is a very nice human being but she is very ugly, she is way to ugly than even an uglier girl. Initially I was ok as my parents fixed me long back and she always dreamt to be with me. I thought this is my destiny. But when we started living, I hate seeing her, when I see other girls around me I feel sad and depressed. She is totally dependent on me, uneducated. I cant divorce her as my parents still live there & I wont be able to face my parents. I don’t know what to do.',
          content: '',
          daysAgo: 55,
          likes: 5,
          comments: [
            {
              id: 1,
              username: 'rohitkumaresh92',
              content: 'If you ever loved her you would not find her ugly. Personality matters but what matters the most is the PERSON. If she is a good homemaker and caretaker than what else you need? No one gets everything. So be thankful to GOD for such a beautiful life.',
              daysAgo: 19,
            },
          ],
          views: 21,
        },



        
        // More posts...
      ]);
      setLoading(false);
    }, 2000); // Simulating a delay
  }, []);

  return (
    <div className="App">
      <Headerc />
      <main>
        <S2 />
        <div className="posts">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <Skeleton height={30} width={200} />
                <br />
                <Skeleton count={3} /><br />
              </div>
            ))
          ) : (
            posts.map((post) => (
              <Link to="/c2" className="colorlink" key={post.id}>
                <P2 post={post} />
              </Link>
            ))
          )}
        </div>
        <Counselor />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default CommunityApp2;
