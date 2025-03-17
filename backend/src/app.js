const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173", "https://ai-code-review-pink.vercel.app/"
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);
module.exports = app;
