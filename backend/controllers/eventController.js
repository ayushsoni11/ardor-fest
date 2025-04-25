import Event from "../models/Event.js";

// CREATE
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, venue, image } = req.body;

    const newEvent = new Event({
      title,
      description,
      date,
      venue,
      image,
      createdBy: req.user._id, // user from verifyToken
    });

    await newEvent.save();
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating event", error: err.message });
  }
};

// READ - Get all events by current user
export const getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user._id });
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching events", error: err.message });
  }
};

// UPDATE
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event updated", event });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating event", error: err.message });
  }
};

// DELETE
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: err.message });
  }
};
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "username email");
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching all events", error: err.message });
  }
};
