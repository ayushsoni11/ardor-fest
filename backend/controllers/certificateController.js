import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { uploadCertificateToCloudinary } from "../utils/uploadToCloudinary.js";

export const generateCertificate = async (req, res) => {
  try {
    const { userName, eventName } = req.body;
    console.log("Received data:", userName, eventName);

    if (!userName || !eventName) {
      return res.status(400).json({
        success: false,
        message: "userName and eventName are required",
      });
    }

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    const certificateHTML = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial';
              text-align: center;
              padding: 50px;
              border: 10px solid #007bff;
            }
            h1 {
              color: #007bff;
            }
          </style>
        </head>
        <body>
          <h1>Certificate of Participation</h1>
          <p>This is to certify that</p>
          <h2>${userName}</h2>
          <p>has successfully participated in</p>
          <h3>${eventName}</h3>
          <p>organized by Ardor Fest.</p>
        </body>
      </html>
    `;

    await page.setContent(certificateHTML, { waitUntil: "networkidle0" });

    const pdfPath = path.join("certificates", `${userName}-${eventName}.pdf`);

    await page.pdf({ path: pdfPath, format: "A4" });

    await browser.close();

    const cloudinaryURL = await uploadCertificateToCloudinary(pdfPath);

    // After uploading to Cloudinary...
    if (fs.existsSync(pdfPath)) {
      fs.unlinkSync(pdfPath);
    }

    res.status(200).json({
      success: true,
      message: "Certificate generated and uploaded!",
      url: cloudinaryURL,
      data: { userName, eventName },
    });
  } catch (error) {
    console.error("Certificate generation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate certificate",
    });
  }
};
