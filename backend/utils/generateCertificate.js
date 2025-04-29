import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

export const generateCertificatePDF = async (userName, eventName) => {
  const templatePath = path.resolve("utils", "certificateTemplate.html");
  let html = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders
  html = html
    .replace("{{userName}}", userName)
    .replace("{{eventName}}", eventName);

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: "new", // for newer versions
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  // Generate PDF and save it temporarily
  const pdfPath = path.resolve("temp", `${userName}-${eventName}.pdf`);
  await page.pdf({ path: pdfPath, format: "A4" });

  await browser.close();

  return pdfPath; // we'll upload this to Cloudinary next
};
