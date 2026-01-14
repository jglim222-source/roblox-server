const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ 기본 주소
app.get("/", (req, res) => {
    res.send("서버 정상 작동중 🚀");
});

// ✅ 비트코인 데이터
app.get("/btc", async (req, res) => {
    try {
        const url = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=10";
        const r = await fetch(url);
        const data = await r.json();
        res.json(data);
    } catch (err) {
        res.status(500).send("데이터 불러오기 실패");
    }
});

app.listen(PORT, () => {
    console.log("서버 켜짐! 포트:", PORT);
});
s