import React, {useEffect, useState} from "react";

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Failed to fetch users:", err));
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Top Users</h1>
            <ul className="space-y-2">
                {users.map((user, index) => (
                    <li key={index} className="bg-white p-4 rounded shadow">
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-500">UserId: {user.userId}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;