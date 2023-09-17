const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.post('/getpostdata', (req, res) => {
    if(req.body.id == 1) {
        res.status(200).json({ title: 'Post 1 is awesome', content: 'This is the post content. This should be in a form of a paragraph.'});
    } else {
        res.status(200).json({ title: `This is post # ${req.body.id}`, content: 'This is the post content. This should be in a form of a paragraph.'});
    }
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
