import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  participantName: {
    type: String,
    required: true,
  },
  participantEmail: {
    type: String,
    required: true,
  },
  college: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
