// models/service.js
import mongoose from "mongoose";

// Define Schema and Model
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    service: { type: String, required: true },
    user: { type: String, required: true },
    message: { type: String },
    document: { type: String }, // Store document URL
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
