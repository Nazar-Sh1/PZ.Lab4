// models/Risk.js
const mongoose = require("mongoose");

const RiskSchema = new mongoose.Schema({
  name: String,
  source: String,
  likelihood: Number, // ймовірність ризику
  impact: Number, // вплив ризику
  mitigationMeasures: [
    {
      description: String,
      effectiveness: Number, // оцінка ефективності
    },
  ],
  priority: Number, // пріоритет ризику, автоматично розраховується
  finalAssessment: Number, // остаточна оцінка після заходів
});

module.exports = mongoose.model("Risk", RiskSchema);
