const express = require("express");
const app = express();

app.set(`view engine`, `ejs`);

app.use(express.static(`${__dirname}/assets`));

app.get("/", (req, res) => {
    res.render("home");
});

// app.get("/commands", (req, res) => {
// res.render("home");
// });

app.get("/donate", (req, res) => {
    res.render("donate");
});

app.get("/invite", (req, res) => {
    res.redirect("https://discordapp.com/oauth2/authorize?client_id=303181184718995457&scope=bot&permissions=372763718");
});

app.get("/support", (req, res) => {
    res.redirect("https://discord.gg/NQCTdEc");
});

app.listen(4321, () => console.log(`PenguBot website running on port 4321.`));
