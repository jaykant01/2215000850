import React, {useEffect, useState} from "react";

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Failed to fetch posts:", err));
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Trending Posts</h1>
            <ul className="space-y-2">
                {posts.map(post => (
                    <li key={post.userId} className="bg-white p-4 rounded shadow">
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;