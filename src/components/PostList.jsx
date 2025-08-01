import React from 'react';
import PostCard from "./PostCard.jsx";
import './PostList.css'
const PostList = ({posts}) => {
    return (
        <div>
            <div className="post-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            
        </div>
    );
};

export default PostList;