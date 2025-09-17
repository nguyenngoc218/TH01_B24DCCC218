import React from 'react';
import { useState } from 'react';

const Post = ({content })=> {
    const [likes, setLikes]=useState(0);
    const [dislikes,setDislikes]=useState(0);

    const addLike = () =>{
        setLikes(likes+1);
    }
    const addDislike =()=>{
        setDislikes(dislikes +1);
    }
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
        <p>{content}</p>
        <div >
          <button onClick={addLike} >
            👍 {likes}
          </button>
          <button onClick={addDislike} >
            👎 {dislikes}
          </button>
        </div>
      </div>
    )
}

export default Post;