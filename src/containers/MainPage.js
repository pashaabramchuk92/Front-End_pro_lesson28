import React, { useState } from 'react';
import CreatePost from '../components/CreatePost'
import List from '../components/List';

const MainPage = () => {
  const [ posts, setPosts ] = useState([]);

  return (
    <header>
      <CreatePost handlerSubmit={(post) => {
        setPosts([post, ...posts]);
      }} />
      <List items={posts} />
    </header>
  );
}

export default MainPage;
