const express = require("express");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const connectDB = require("./db");
const chatRoutes = require("./routes/chat");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
connectDB();



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/loader.gif", (req, res) => {
  res.sendFile(__dirname + "/loader.gif");
});
// Use the chat routes
app.use("/api", chatRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
