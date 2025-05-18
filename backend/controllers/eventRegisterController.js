import { sendMail } from "../utils/sendMail.js";

export const registerForEvent = async (req, res) => {
  try {
    const { name, email, eventName } = req.body;

    // ... Your registration logic ...

    const htmlTemplate = `
      <h2>Hello ${name}!</h2>
      <p>You have successfully registered for <strong>${eventName}</strong>.</p>
      <p>We’ll keep you posted on updates. Thank you for joining Ardor Fest!</p>
    `;

    await sendMail({
      to: email,
      subject: `Registration Confirmed for ${eventName}`,
      html: htmlTemplate,
    });

    res.status(200).json({
      success: true,
      message: "User registered and mail sent!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Event registration failed",
    });
  }
};
