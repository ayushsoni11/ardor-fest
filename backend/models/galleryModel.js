import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  src: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Gallery = mongoose.model("Gallery", gallerySchema);
