const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.resolve(__dirname, "public", "assets")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.post('/post', (req, res) => {
    res.status(200).json({ reply: 'Hi' });
});

app.listen(PORT, () => console.log(`Server Live at port: ${PORT}`));
