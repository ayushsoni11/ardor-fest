import Event from "../models/Event.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";


// All Events 
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
// Create Event
export const createEvent = async (req, res) => {
  console.log("print the body:",req.body);
  try {
    const { title, desc, date, venue, image ,category } = req.body;

    const newEvent = new Event({
      title,
      desc,
      date,
      venue,
      image,
      category,
      createdBy: req.user._id, // user from verifyToken
    });

    await newEvent.save();
    res
      .status(201)
      .json({success : true, message: "Event created successfully", event: newEvent });
  } catch (err) {
    console.log("inside error");
    res
      .status(500)
      .json({ success : false, message: "problem in creating event", error: err.message });
  }
};

// Edit Event
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

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    console.log(event);

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({   success : true, message: "Event deleted" });
  } catch (err) {
    res
      .status(500)
      .json({success : false, message: "Error deleting event", error: err.message });
  }
};

// My Events
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

// All Items
export const userEvents = async (req, res) => {
  try {
    const events = await Event.find().populate();
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching all events", error: err.message });
  }
};
