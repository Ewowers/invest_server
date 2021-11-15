const express = require("express");
const path = require("path");
const api = require("./api");
const app = express();
app.use(express.json({ limit: "10gb" }));
app.use("/api", api); //апишки

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`http://localhost:${port}`));
