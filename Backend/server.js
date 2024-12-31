const express = require("express");
const cors = require("cors"); 
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, "profileData.json");

app.post("/save-profile", (req, res) => {
    console.log("Incoming Profile Data:", req.body); 
    const profileData = req.body;
  
    try {
      let existingData = {};
      if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        existingData = JSON.parse(rawData);
      }
  
      const updatedData = { ...existingData, ...profileData };
  
      fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));
  
      res.status(200).json({ message: "Profile data saved successfully!" });
    } catch (error) {
      console.error("Error saving profile data:", error); 
      res.status(500).json({ message: "Failed to save profile data." });
    }
  });

app.get("/get-profile", (req, res) => {
  try {
    if (fs.existsSync(dataFilePath)) {
      const rawData = fs.readFileSync(dataFilePath);
      const existingData = JSON.parse(rawData);
      res.status(200).json(existingData);
    } else {
      res.status(404).json({ message: "No profile data found." });
    }
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ message: "Failed to fetch profile data." });
  }
});
app.post("/",(req,res)=>{
  res.send("pro")
})


//demo data from graphData.json 
app.get("/graphData",(req,res)=>{
  const graphDataFilePath = path.join(__dirname, "graphData.json");
  if (fs.existsSync(graphDataFilePath)) {
    const rawData = fs.readFileSync(graphDataFilePath);
    const graphData = JSON.parse(rawData);
    res.json(graphData);
  } else {
    res.status(404).json({ message: "No graph data found." });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
