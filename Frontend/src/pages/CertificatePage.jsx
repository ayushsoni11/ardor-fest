import React, { useState } from 'react';
import Navbar from '@/components/LandingPage/Navbar';
import './CertificatePage.css';

const CertificatePage = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    festName: '',
    participantName: '',
    eventName: '',
    departmentName: '',
    year: '',
    date: '',
    venue: '',
    position: '',
    hodName: '',
    coordinatorName: '',
    principalName: ''
  });

  const [showCertificate, setShowCertificate] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  return (
    <>
    <Navbar />
    <div className="certificate-container">
      <h1>Certificate Generator</h1>
      <form onSubmit={handleGenerate} className="certificate-form">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Generate Certificate</button>
      </form>

      {showCertificate && (
        <div className="certificate">
  <div className="certificate-border">
    <div className="certificate-inner">
      <header className="certificate-header">
        <img src="/images/dogs.jpg" alt="College Logo" className="logo" />
        <h2>{formData.collegeName}</h2>
        <h3>Annual Fest – <span className="fest-name">"{formData.festName}"</span></h3>
      </header>

      <h1 className="certificate-title">Certificate of Appreciation</h1>

      <p className="presented">Presented to</p>
      <h2 className="recipient-name">{formData.participantName}</h2>

      <p className="certificate-text">
        for outstanding participation and contribution in the event
        <strong> "{formData.eventName}"</strong>, organized by the
        <strong> {formData.departmentName}</strong> during the
        <strong> {formData.year}</strong> edition of our vibrant cultural fest
        <strong> "{formData.festName}"</strong>.
      </p>

      <p className="certificate-text">
        Your enthusiasm, dedication, and talent helped make the celebration
        successful and memorable.
      </p>

      <p className="event-info">
        📅 <strong>Date:</strong> {formData.date} &nbsp;&nbsp;&nbsp;
        📍 <strong>Venue:</strong> {formData.venue}
      </p>

      {formData.position && (
        <div className="award-section">
          <p className="highlight-trophy">🏆 You secured</p>
          <h3 className="position">{formData.position} Place</h3>
        </div>
      )}

      <div className="signature-section">
        <div className="signature">
          <span>__________________________</span>
          <p>Dr. {formData.hodName}<br />HOD, {formData.departmentName}</p>
        </div>
        <div className="signature">
          <span>__________________________</span>
          <p>Prof. {formData.coordinatorName}<br />Fest Coordinator</p>
        </div>
        <div className="signature">
          <span>__________________________</span>
          <p>{formData.principalName}<br />Principal, {formData.collegeName}</p>
        </div>
      </div>
    </div>
  </div>
</div>

      )}
    </div>
    </>
    
  );
};

export default CertificatePage;

