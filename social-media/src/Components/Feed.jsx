import React, {useEffect, useState} from "react";

const Feed = () => {
    const [feedItems, setFeedItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/comments")
            .then(res => res.json())
            .then(data => setFeedItems(data))
            .catch(err => console.error("Failed to fetch comments:", err));
    }, []);


    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Feed</h1>
            <ul className="space-y-2">
                {feedItems.map(item => (
                    <li key={item.id} className="bg-white p-4 rounded shadow">
                        <div className="font-semibold">{item.userId}</div>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;