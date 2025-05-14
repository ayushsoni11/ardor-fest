import { Gallery } from "../models/galleryModel.js";

// GET all gallery items
export const getAllGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find();
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch gallery items" });
  }
};

// POST a new gallery item
export const addGalleryItem = async (req, res) => {
  try {
    const { id, src, category, caption, date } = req.body;

    const newItem = await Gallery.create({ id, src, category, caption, date });

    res
      .status(201)
      .json({ success: true, message: "Gallery item added", data: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to add gallery item" });
  }
};
