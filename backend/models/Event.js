import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: String,
    date: Date,
    venue: String,
    image: String, // optional
    category: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // So we know which event-head created it
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
