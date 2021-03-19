const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema(
  {
    href: { type: String, unique: false, required: true },
    ttfb: { type: Number, unique: false, required: true },
    fcp: { type: Number, unique: false, required: true },
    dom_load: { type: Number, unique: false, required: true },
    window_load: { type: Number, unique: false, required: true },
  },
  {
    timestamps: true,
  }
);

const Metric = mongoose.model("Metric", metricSchema);

module.exports = Metric;
