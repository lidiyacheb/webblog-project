import React from 'react';
import PostList from "../components/PostList.jsx";
import posts from "../data/posts.js";

const Home = () => {
    return (
        <div style={{ margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
            <h2>Willkommen beim Event-Blog</h2>
            <p>Alle Events</p>
            </div>
            <PostList posts={posts} />
        </div>
    );
};

export default Home;