import express from "express";
import path from "path";
import axios from "axios";

const app = express();
const PORT = 8000;
let url = "https://catfact.ninja/fact";

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set views directory (ESM method)
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url);
    const fact = response.data.fact;

    res.render("index", { fact });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.render("index", { fact: [] });
  }
});

app.listen(PORT, () => {
  console.log(`serve is running on port ${PORT}`);
});
