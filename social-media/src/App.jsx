import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./Components/TopUsers.jsx";
import TrendingPosts from "./Components/TrendingPosts.jsx";
import Feed from "./Components/Feed.jsx";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-purple-300 shadow p-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-purple-600">SocialMedia</div>
                    <div className="space-x-4">
                        <Link className="text-gray-700 hover:text-blue-600" to="/">Feed</Link>
                        <Link className="text-gray-700 hover:text-blue-600" to="/TopUsers">Top Users</Link>
                        <Link className="text-gray-700 hover:text-blue-600" to="/TrendingPosts">Trending Posts</Link>
                    </div>
                </nav>
                <main className="p-6">
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/TopUsers" element={<TopUsers />} />
                        <Route path="/TrendingPosts" element={<TrendingPosts />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
