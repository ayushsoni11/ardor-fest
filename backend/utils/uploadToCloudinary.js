import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadCertificateToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: "raw", // Important for PDFs
      folder: "certificates",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    // Remove local file after upload
    fs.unlinkSync(filePath);

    return result.secure_url; // This is your direct access link
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Cloudinary upload failed");
  }
};
