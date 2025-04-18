// api/index.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// User data
const users = [
    { userId: "1", name: "Jon Doe" },
    { userId: "10", name: "ivy talor" },
    { userId: "11", name: "lathy andre" },
    { userId: "2", name: "Jonhn abrim" },
    { userId: "14", name: "akasy Kumar" },
    { userId: "17", name: "shartak khan" },
    { userId: "18", name: "tony stark" },
    { userId: "19", name: "Iron man" },
    { userId: "12", name: "hulk" },
    { userId: "2", name: "Thor" }

];

// Posts data
const posts = [
    { id: "246", userId: "1", content: "Post about ant" },
    { id: "241", userId: "1", content: "Post about elepgant" },
    { id: "242", userId: "1", content: "Post about lion" },
    { id: "243", userId: "1", content: "Post about toger" },
    { id: "244", userId: "1", content: "Post about girraff" },
    { id: "245", userId: "1", content: "Post about camel" },
    { id: "247", userId: "1", content: "Post about apple" },
    { id: "162", userId: "1", content: "Post about sugar" },
    { id: "168", userId: "1", content: "Post about dance" },
    { id: "169", userId: "1", content: "Post about games" }
];

// Comments data
const comments = [
    { id: "3893", userId: "150", content: "OLd comment" },
    { id: "4791", userId: "150", content: "Boring comment" }
];

// Routes
app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.get("/api/comments", (req, res) => {
    res.json(comments);
});

app.listen(PORT, () => {
    console.log(`API Server running at http://localhost:${PORT}`);
});
