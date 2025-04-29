import Registration from "../models/Registration.js";
import Event from "../models/Event.js";

// Register a participant for an event
export const registerForEvent = async (req, res) => {
  try {
    const { eventId, participantName, participantEmail, college, phone } =
      req.body;

    // Validate if event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const newRegistration = new Registration({
      event: eventId,
      participantName,
      participantEmail,
      college,
      phone,
    });

    await newRegistration.save();

    res.status(201).json({
      message: "Registered successfully",
      registration: newRegistration,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
};

// (optional) Get all registrations for an event
export const getRegistrationsByEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check ownership
    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const registrations = await Registration.find({ event: eventId });
    res.status(200).json(registrations);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching registrations", error: err.message });
  }
};
export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("event");
    res.status(200).json({
      success: true,
      registrations,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
