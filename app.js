const express = require("express");
const snekfetch = require("snekfetch");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/donate", (req, res) => {
    res.render("donate");
});

app.get("/stats", async (req, res) => {
    const { body } = await snekfetch.get("https://api.pengubot.com/stats").catch(() => res.render("home"));
    return res.render("stats", { data: body });
});

app.get("/invite", (req, res) => {
    res.redirect("https://discordapp.com/oauth2/authorize?client_id=303181184718995457&scope=bot&permissions=372763718");
});

app.get("/support", (req, res) => res.redirect("https://discord.gg/NQCTdEc"));

app.get("/developers/aditya", (req, res) => res.redirect("https://www.adityatd.me"));

app.get("/developers/jacz", (req, res) => res.redirect("http://jaczaus.me"));

app.listen(4321, () => console.log(`PenguBot website running on port 4321.`));
