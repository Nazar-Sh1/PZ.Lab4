// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Risk = require("./models/Risk");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/risk_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Додавання ризику
app.post("/risks", async (req, res) => {
  const { name, source, likelihood, impact } = req.body;
  const priority = likelihood * impact; // Оцінка ризику за критичністю
  const risk = new Risk({ name, source, likelihood, impact, priority });
  await risk.save();
  res.status(201).json(risk);
});

// Отримання всіх ризиків
app.get("/risks", async (req, res) => {
  const risks = await Risk.find();
  res.json(risks);
});

// Оновлення ризику з додаванням заходів
app.put("/risks/:id/mitigation", async (req, res) => {
  const { description, effectiveness } = req.body;
  const risk = await Risk.findById(req.params.id);
  risk.mitigationMeasures.push({ description, effectiveness });

  // Оцінка після заходів
  risk.finalAssessment = risk.priority - effectiveness;
  await risk.save();

  res.json(risk);
});

const PORT = 3001; // Використайте інший порт, наприклад, 3001
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
