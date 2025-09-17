import React from 'react';
import Post from './post';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Bài 4: Like/Dislike Post</h1>
      <Post content="Học ReactJS có khó không?" />
      <Post content="Props và State là gì?" />
      <Post content="Lập trình web có vui không?" />
    </div>
  );
}

export default App;

