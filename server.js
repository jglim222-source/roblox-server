import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/btc", async (req, res) => {
    const url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=10";
    const r = await fetch(url);
    const data = await r.json();
    res.json(data);
});

app.listen(PORT, () => {
    console.log("서버 켜짐!");
});
